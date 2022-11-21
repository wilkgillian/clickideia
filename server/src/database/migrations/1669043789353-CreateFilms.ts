import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateFilms1669043789353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
