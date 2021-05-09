import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from 'typeorm';
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';
import { UserRoles } from '../../modules/users/entities/user.interface';

export class UsersTable1620384036826 implements MigrationInterface {
  public tableName = 'users';

  public columns: TableColumnOptions[] = [
    {
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment',
    },
    {
      name: 'username',
      type: 'varchar',
      isUnique: true,
    },
    {
      name: 'email',
      type: 'varchar',
      isUnique: true,
    },
    {
      name: 'password',
      type: 'varchar',
    },
    {
      name: 'role',
      type: 'enum',
      enum: Object.values(UserRoles),
      default: `"${UserRoles.USER}"`,
    },
    {
      name: 'workspaceId',
      type: 'int',
      isNullable: true,
    },
  ];

  public indices: TableIndex[] = [
    new TableIndex({
      name: 'IDX_USERS_ID',
      columnNames: ['id'],
    }),
    new TableIndex({
      name: 'IDX_USERS_WORKSPACEID',
      columnNames: ['workspaceId'],
    }),
  ];

  public foreighKeys: TableForeignKey[] = [
    new TableForeignKey({
      name: 'WORKSPACE_FOREIGH_KEY',
      columnNames: ['workspaceId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'workspaces',
      onDelete: 'SET NULL',
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: this.columns,
      }),
      true,
    );

    for (const key of this.foreighKeys) {
      await queryRunner.createForeignKey(this.tableName, key);
    }

    for (const index of this.indices) {
      await queryRunner.createIndex(this.tableName, index);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    for (const key of this.foreighKeys) {
      await queryRunner.dropForeignKey(this.tableName, key);
    }

    for (const index of this.indices) {
      await queryRunner.dropIndex(this.tableName, index);
    }

    await queryRunner.dropTable(this.tableName);
  }
}
