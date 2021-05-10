import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IUser, UserRoles } from './user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Workspace } from '../../workspaces/entities/workspace.entity';
import { hashPassword } from '../../../commons/hashPassword';

@Entity({
  name: 'users',
})
export class User implements IUser {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id: number;

  @Column({ unique: true })
  @ApiProperty()
  public username: string;

  @Column({ unique: true })
  @ApiProperty()
  public email: string;

  @Column({ select: false })
  public password: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.USER,
  })
  @ApiProperty({ enum: UserRoles })
  public role: UserRoles;

  @Column({ nullable: true })
  public workspaceId: number;

  @ManyToOne(() => Workspace, (workspace: Workspace) => workspace.users, {
    eager: true,
  })
  @ApiProperty({ required: false })
  public workspace?: Workspace;

  @BeforeUpdate()
  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    if (this.password?.length) {
      this.password = await hashPassword(this.password);
    }
  }

  @BeforeUpdate()
  @BeforeInsert()
  public emailToLower(): void {
    this.email = this.email.toLocaleLowerCase();
  }
}
