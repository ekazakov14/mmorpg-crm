import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export class WorkspacesTable1620384027813 implements MigrationInterface {
  public tableName = 'workspaces';

  public columns: TableColumnOptions[] = [
    {
      name: 'id',
      type: 'int',
      isPrimary: true,
      isGenerated: true,
      generationStrategy: 'increment',
    },
    {
      name: 'name',
      type: 'varchar',
    },
  ];

  public indices: TableIndex[] = [
    new TableIndex({
      name: 'IDX_WORKSPACES_NAME',
      columnNames: ['id'],
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

    for (const index of this.indices) {
      await queryRunner.createIndex(this.tableName, index);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    for (const index of this.indices) {
      await queryRunner.dropIndex(this.tableName, index.name);
    }

    await queryRunner.dropTable(this.tableName);
  }
}
