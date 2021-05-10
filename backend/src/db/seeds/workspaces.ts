import { MigrationInterface, QueryRunner } from 'typeorm';
import * as faker from 'faker';
import { Workspace } from '../../modules/workspaces/entities/workspace.entity';

export class WorkspaceSeeder implements MigrationInterface {
  public rowsCount = 4;

  public getFakeWorkspace(): Workspace {
    const workspace = new Workspace();
    workspace.name = faker.company.companyName();

    return workspace;
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const repository = queryRunner.connection.getRepository(Workspace);

    const workspaces = [];
    for (let i = 0; i < this.rowsCount; i++) {
      const workspace = this.getFakeWorkspace();
      workspaces.push(workspace);
    }

    await repository.insert(workspaces);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const repository = queryRunner.connection.getRepository(Workspace);
    await repository.clear();
  }
}
