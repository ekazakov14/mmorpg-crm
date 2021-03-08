import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUser, UserRoles } from './user.interface';
import { PropertiesKeysOf } from 'src/commons/types/PropertiesKeysOf';
import { hashPassword } from 'src/commons/hashPassword';

@Entity({
  name: 'users',
})
export class User implements IUser {
  static confidencialCredentials: PropertiesKeysOf<User>[] = ['password'];

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    unique: true,
  })
  public username: string;

  @Column({
    unique: true,
  })
  public email: string;

  @Column()
  public password: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.USER,
  })
  public role: UserRoles;

  @BeforeUpdate()
  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await hashPassword(this.password);
  }
}
