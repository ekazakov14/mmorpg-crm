import { Workspace } from '../../workspaces/entities/workspace.entity';

export enum UserRoles {
  ADMIN = 'admin',
  WORKSPACE_LEADER = 'workspace_leader',
  USER = 'user',
}

interface IUser {
  username: string;
  email: string;
  password?: string;
  role: UserRoles;
  workspace?: Workspace;
}

export type { IUser };
