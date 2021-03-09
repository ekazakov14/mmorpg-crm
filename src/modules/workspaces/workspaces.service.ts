import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workspace } from './entities/workspace.entity';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
    private readonly workspacesRepository: Repository<Workspace>,
  ) {}

  public findAll(): Promise<Workspace[]> {
    return this.workspacesRepository.find();
  }

  public find(id: Workspace['id']): Promise<Workspace> {
    return this.workspacesRepository.findOneOrFail(id);
  }

  public async users(id: Workspace['id']) {
    const { users } = await this.workspacesRepository.findOneOrFail({
      where: {
        id,
      },
      relations: ['users'],
    });

    return users;
  }

  public create(workspace: Workspace): Promise<Workspace> {
    return this.workspacesRepository.save(workspace);
  }

  public async update(
    id: Workspace['id'],
    updates: Partial<Workspace>,
  ): Promise<Workspace> {
    const { affected } = await this.workspacesRepository.update(id, updates);

    if (affected) {
      return this.workspacesRepository.findOne(id);
    } else {
      throw new BadRequestException();
    }
  }

  public async delete(id: Workspace['id']) {
    const { affected } = await this.workspacesRepository.delete(id);

    if (!affected) {
      throw new BadRequestException();
    }
  }
}
