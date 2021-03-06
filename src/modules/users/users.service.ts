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

  public create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  public find(id: User['id']) {
    return this.userRepository.findOneOrFail(id);
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
