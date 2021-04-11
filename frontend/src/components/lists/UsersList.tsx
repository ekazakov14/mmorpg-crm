import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../../../../backend/src/modules/users/entities/user.entity';
import { api } from '../../commons/api';

const UsersList = () => {
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [data, setData] = useState<(User|{key: number})[]>([]);

  useEffect(() => {
    api.get('/users').then((users: AxiosResponse<User[]>) => {
      const data = users.data.map((user, i) => ({...user, key: i}));
      setData(data);
    });
  }, []);

  const rowSelection: TableProps<any>['rowSelection'] = {
    selectedRowKeys: selectedRows,
    onChange: (selectedRowKeys) => setSelectedRows(selectedRowKeys),
  };

  const columns: TableProps<any>['columns'] = [
    {
      title: 'name',
      dataIndex: 'username',
    },
  ];

  return (
    <Table rowSelection={rowSelection} dataSource={data} columns={columns} />
  )
};

export default UsersList;