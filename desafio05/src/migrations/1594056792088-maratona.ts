import {MigrationInterface, QueryRunner} from "typeorm";

export class maratona1594056792088 implements MigrationInterface {
    name = 'maratona1594056792088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "live" ("id" varchar PRIMARY KEY NOT NULL, "nome" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "live"`);
    }

}
