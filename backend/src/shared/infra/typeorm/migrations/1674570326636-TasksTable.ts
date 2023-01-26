import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TasksTable1674570326636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isUnique: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'content',
            type: 'varchar',
          },
          {
            name: 'list',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'userId',
            type: 'uuid',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'FKTasksUsers',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['userId'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks');
  }
}
