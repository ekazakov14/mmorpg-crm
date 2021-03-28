import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseEntityService } from '../../commons/services/BaseEntityService';
import { Workspace } from './entities/workspace.entity';

@Injectable()
export class WorkspacesService extends BaseEntityService<Workspace> {
  constructor(
    @InjectRepository(Workspace)
    private readonly workspacesRepository: Repository<Workspace>,
  ) {
    super(workspacesRepository);
  }

  public async users(id: Workspace['id']) {
    const { users } = await this.workspacesRepository.findOneOrFail({
      where: { id },
      relations: ['users'],
    });

    return users;
  }
}
