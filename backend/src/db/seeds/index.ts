import { MigrationInterface, QueryRunner } from 'typeorm';
import * as dotenv from 'dotenv';
import { UserSeeder } from '../../modules/users/db/seeds/users';
import { WorkspaceSeeder } from '../../modules/workspaces/db/seeds/workspaces';

dotenv.config();

export class index1615829619478 implements MigrationInterface {
  protected checkIfProduction() {
    if (process.env.NODE_ENV !== 'development') {
      throw new Error('Seeding available only production mode');
    }
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.checkIfProduction();
    const usersSeeder = new UserSeeder();
    const workspaceSeeder = new WorkspaceSeeder();

    await workspaceSeeder.up(queryRunner);
    await usersSeeder.up(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.checkIfProduction();
    const usersSeeder = new UserSeeder();
    const workspaceSeeder = new WorkspaceSeeder();

    await queryRunner.connection.query('SET FOREIGN_KEY_CHECKS = 0;');
    const promises = [
      workspaceSeeder.down(queryRunner),
      usersSeeder.down(queryRunner),
    ];
    await Promise.all(promises);
    await queryRunner.connection.query('SET FOREIGN_KEY_CHECKS = 1;');
  }
}
