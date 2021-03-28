import { MigrationInterface, QueryRunner } from 'typeorm';
import * as faker from 'faker';
import { User } from '../../../../modules/users/entities/user.entity';
import { UserRoles } from '../../entities/user.interface';
import { Workspace } from '../../../workspaces/entities/workspace.entity';

export class UserSeeder implements MigrationInterface {
  public usersCount = 50;

  public getFakeUser(role: UserRoles, workspace?: Workspace): User {
    const user = new User();
    user.username = faker.internet.userName();
    user.email = faker.internet.email();
    user.password = faker.internet.password();
    user.role = role;

    if (workspace) {
      user.workspace = workspace;
    }

    return user;
  }

  public getWorkspaces(queryRunner: QueryRunner) {
    const workspacesRepository = queryRunner.connection.getRepository(
      Workspace,
    );
    return workspacesRepository.find();
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const repository = queryRunner.connection.getRepository(User);
    const workspaces = await this.getWorkspaces(queryRunner);

    const getRandomWorkspace = () => {
      const randomId = faker.random.number({
        min: workspaces[0].id,
        max: workspaces[workspaces.length - 1].id,
      });

      return workspaces.find((workspace) => workspace.id === randomId);
    };

    // insert admin
    const admin = this.getFakeUser(UserRoles.ADMIN);
    await repository.insert(admin);

    // insert leaders
    const leaders: User[] = [];
    for (let i = 0; i < workspaces.length; i++) {
      const user = this.getFakeUser(UserRoles.WORKSPACE_LEADER, workspaces[i]);
      leaders.push(user);
    }

    await repository.insert(leaders);

    // insert users
    const users: User[] = [];
    for (let i = 0; i < this.usersCount; i++) {
      const user = this.getFakeUser(UserRoles.USER, getRandomWorkspace());
      users.push(user);
    }

    await repository.insert(users);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const repository = queryRunner.connection.getRepository(User);
    await repository.clear();
  }
}
