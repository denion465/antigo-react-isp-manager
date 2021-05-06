import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('commitments')
class Commitment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Commitment;
