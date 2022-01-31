import { Table, TableProps } from 'antd'
import { useRef } from 'react'

import { ColumnsType as IColumnsType } from 'antd/lib/table'
import { ITableRecordType } from './TableExample.interface'
import { IPatternOptions } from '../../../hooks/useAntPattern/interface'

import useAntPattern from '../../../hooks/useAntPattern'

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

  const tableOptions = useRef<IPatternOptions<TableProps<ITableRecordType>>>({
    element: Table,
    default: {
      dataSource: tableDataSource.current,
      columns: tableColumns.current,
    },
  })

  const tablePattern = useAntPattern(tableOptions.current)

  return (
    <>
      <h2>Table</h2>
      {tablePattern.element}
    </>
  )
}

export default TableExample
