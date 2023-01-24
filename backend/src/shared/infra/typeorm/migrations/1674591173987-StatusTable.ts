import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class StatusTable1674591173987 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'status',
        columns: [
          {
            name: 'completed',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'making',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'to_do',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'to_define',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
  }
}
