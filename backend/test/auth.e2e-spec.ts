import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { User } from '../src/modules/users/entities/user.entity';
import { UserRoles } from '../src/modules/users/entities/user.interface';

describe('AuthController', () => {
  let app: INestApplication;
  let user: User;
  let loginBeforeRegisterResponse: request.Response;
  let registerResponse: request.Response;
  let loginAfterRegisterResponse: request.Response;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [],
      providers: [],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    user = new User();

    user.username = 'JohnDoe';
    user.password = 'qwerty1234';
    user.email = 'test@test.ru';
    user.role = UserRoles.USER;

    const loginRequest = async () =>
      await request(app.getHttpServer()).post('/auth/login').send({
        login: user.username,
        password: user.password,
      });

    loginBeforeRegisterResponse = await loginRequest();

    registerResponse = await request(app.getHttpServer())
      .post('/auth/register')
      .send(user)
      .set('Accept', 'application/json');

    loginAfterRegisterResponse = await loginRequest();
  });

  it('should reject login without register', async () => {
    expect(loginBeforeRegisterResponse.status).toBe(HttpStatus.UNAUTHORIZED);
  });

  it('register should create new user', async () => {
    const createdUserId = registerResponse.body.id;
    const { username, email, role } = user;
    const { body, status } = await request(app.getHttpServer()).get(
      `/users/${createdUserId}`,
    );

    expect(status).toBe(HttpStatus.OK);
    expect(body).toMatchObject({
      username,
      email,
      role,
    });
  });

  it('register should return created user', async () => {
    const { body, status } = registerResponse;
    const { username, email, role } = user;

    expect(body).toMatchObject({
      username,
      email,
      role,
    });
    expect(status).toBe(HttpStatus.CREATED);
  });

  it('register response should not contain password', async () => {
    expect(registerResponse.body.password).toBeUndefined();
  });

  it('login should return access_token', async () => {
    const { body, status } = loginAfterRegisterResponse;
    expect(status).toBe(HttpStatus.OK);
    expect(body.access_token).toBeDefined();
  });

  afterAll(async () => {
    await app.close();
  });
});
