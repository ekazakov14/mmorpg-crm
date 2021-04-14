import { Table } from 'antd';
import { TableProps } from 'antd/lib/table';
import { useState } from 'react';

type DefaultTableItem = {
  id: number,
};

type Props<T> = {
  items: (T & DefaultTableItem)[],
};

const DefaultTable = <T,>({ items }: Props<T>) => {
  const [selectedRows, setSelectedRows] = useState<any>([]);

  const rowSelection: TableProps<any>['rowSelection'] = {
    selectedRowKeys: selectedRows,
    onChange: (selectedRowKeys) => setSelectedRows(selectedRowKeys),
  };

  let columns: TableProps<any>['columns'];

  if (items.length) {
    columns = Object.keys(items[0]).map((field) => ({
      title: field,
      dataIndex: field,
    }));
  }

  const data = items.map((item) => ({...item, key: item.id}));

  return (
    <Table rowSelection={rowSelection} dataSource={data} columns={columns} />
  );
};

export default DefaultTable;