import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/modules/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'workspaces',
})
export class Workspace {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id: number;

  @Column()
  @ApiProperty()
  public name: string;

  @OneToMany(() => User, (user: User) => user.workspace)
  @ApiProperty({ type: () => User })
  public users?: User[];
}
