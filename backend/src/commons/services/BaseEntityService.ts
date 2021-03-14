import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

export class BaseEntityService<T> {
  constructor(private readonly repository: Repository<T>) {}

  public findAll(): Promise<T[]> {
    return this.repository.find();
  }

  public async find(id: number): Promise<T> {
    try {
      return await this.repository.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException();
    }
  }

  public async create(entity: T): Promise<T> {
    try {
      return await this.repository.save(entity);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  public async update(id: number, updates: T): Promise<void> {
    const result = await this.repository.update(id, updates);

    if (result.affected) {
      return;
    } else {
      throw new BadRequestException();
    }
  }

  public async delete(id: number): Promise<void> {
    const result = await this.repository.delete(id);

    if (result.affected) {
      return;
    } else {
      throw new BadRequestException();
    }
  }
}
