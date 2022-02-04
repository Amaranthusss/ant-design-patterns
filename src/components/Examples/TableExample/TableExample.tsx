import { Table, TableProps } from 'antd'
import { useRef } from 'react'

import AntPattern from '../../AntPattern/AntPattern'

import { ColumnsType as IColumnsType } from 'antd/lib/table'
import { IAntPatternOptions } from '../../AntPattern/AntPattern.interface'
import { ITableRecordType } from './TableExample.interface'

const TableExample = (): JSX.Element => {
  const tableColumns = useRef<IColumnsType<ITableRecordType>>([
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'permissions',
      title: 'Permissions',
      dataIndex: 'permissions',
    },
  ])

  const tableDataSource = useRef<ITableRecordType[]>([
    { key: 0, name: 'Lucas', permissions: 'dev' },
    { key: 1, name: 'Oscar', permissions: 'admin' },
    { key: 2, name: 'David', permissions: 'client' },
  ])

  const tableOptions = useRef<IAntPatternOptions<TableProps<ITableRecordType>>>(
    {
      element: Table,
      default: {
        dataSource: tableDataSource.current,
        columns: tableColumns.current,
      },
    }
  )

  return (
    <>
      <h2>Table</h2>
      <AntPattern options={tableOptions.current} />
    </>
  )
}

export default TableExample
