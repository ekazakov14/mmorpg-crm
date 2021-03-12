import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUser, UserRoles } from './user.interface';
import { PropertiesKeysOf } from 'src/commons/types/PropertiesKeysOf';
import { hashPassword } from 'src/commons/hashPassword';
import { Workspace } from 'src/modules/workspaces/entities/workspace.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'users',
})
export class User implements IUser {
  static confidencialCredentials: PropertiesKeysOf<User>[] = ['password'];

  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id: number;

  @Column({
    unique: true,
  })
  @ApiProperty()
  public username: string;

  @Column({
    unique: true,
  })
  @ApiProperty()
  public email: string;

  @Column()
  @ApiProperty()
  public password: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.USER,
  })
  @ApiProperty({
    enum: UserRoles,
  })
  public role: UserRoles;

  @ManyToOne(() => Workspace, (workspace: Workspace) => workspace.users, {
    onDelete: 'SET NULL',
  })
  @ApiProperty({
    required: false,
  })
  public workspace?: Workspace;

  @BeforeUpdate()
  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await hashPassword(this.password);
  }
}
