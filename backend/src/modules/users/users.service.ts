import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public create({ username, email, password }: User): Promise<User> {
    const user = new User();
    user.username = username;
    user.email = email;
    user.password = password;

    return this.userRepository.save(user);
  }

  public find(id: User['id']): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }

  public findByUsername(username: User['username']): Promise<User> {
    return this.userRepository.findOne({
      username,
    });
  }

  public findByEmail(email: User['email']) {
    return this.userRepository.findOne({
      email,
    });
  }

  public findAll(): Promise<User[]> {
    const users = this.userRepository.find();
    return users;
  }

  public async update(id: User['id'], updates: Partial<User>): Promise<any> {
    const user = await this.find(id);

    // update fields in exisiting user class instance
    Object.keys(updates).forEach((key) => (user[key] = updates[key]));

    await this.userRepository.update(id, user);

    return user;
  }

  public delete(id: User['id']): void {
    this.userRepository.delete(id);
  }
}
