import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createCommitments1620258368278
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'commitments',
        columns: [
          {
            name: 'ide',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'data',
            type: 'timestamp with time zone',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('commitments');
  }
}
