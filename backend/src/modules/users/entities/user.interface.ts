import { Workspace } from 'src/modules/workspaces/entities/workspace.entity';

enum UserRoles {
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

export { IUser, UserRoles };
