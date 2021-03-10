import { compare } from 'bcrypt';

export const comparePassword = (
  password: string,
  hash: string,
): Promise<boolean> => compare(password, hash);
