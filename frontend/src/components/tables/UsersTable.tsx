import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../../../../backend/src/modules/users/entities/user.entity';
import { api } from '../../commons/api';
import DefaultTable from './DefaultTable';

const UsersTable = () => {
  const [users, setUsers] = useState<(User)[]>([]);

  useEffect(() => {
    api.get('/users').then(({ data }: AxiosResponse<User[]>) => setUsers(data));
  }, []);

  return (
    <DefaultTable items={users} />
  );
};

export default UsersTable;