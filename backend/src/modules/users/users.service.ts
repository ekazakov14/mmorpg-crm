import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(user: User): Promise<User> {
    const savedUser = await this.userRepository.save(user);
    delete savedUser.password;
    return savedUser;
  }

  public async getUserPassword(id: number): Promise<string> {
    const { password } = await this.userRepository.findOneOrFail({
      where: { id },
      select: ['password'],
    });

    return password;
  }

  public find(id: number): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }

  public findByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({ username });
  }

  public findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  public findAll(): Promise<User[]> {
    const users = this.userRepository.find();
    return users;
  }

  public async update(id: number, updates: Partial<User>): Promise<void> {
    const user = plainToClass(User, updates);
    user.id = id;

    const result = await this.userRepository.update(id, user);

    if (!result.affected) {
      throw new BadRequestException('User not found');
    }
  }

  public async delete(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (!result.affected) {
      throw new BadRequestException('User not found');
    }
  }
}
