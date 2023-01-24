import { Column, Entity } from 'typeorm';

@Entity('status')
class Status {
  @Column()
  completed: string;

  @Column()
  making: string;

  @Column()
  to_do: string;

  @Column()
  to_define: string;
}

export { Status };
