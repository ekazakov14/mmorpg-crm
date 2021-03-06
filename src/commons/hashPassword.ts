import { hash } from 'bcrypt';

export const hashPassword = (password: string): Promise<string> =>
  hash(password, 10);
