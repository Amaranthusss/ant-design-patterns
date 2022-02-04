import { Button, ButtonProps, Input, InputProps, Table, TableProps } from 'antd'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import AntPattern from './AntPattern'

import { ColumnsType as IColumnsType } from 'antd/lib/table'
import { IAntPatternComponent } from './AntPattern.interface'
import { IAntPatternOptions } from './AntPattern.interface'
import _ from 'lodash'

const testText: string = 'test-text'

test('ant-pattern-button', async () => {
  const buttonOptions: IAntPatternOptions<ButtonProps> = {
    element: Button,
    default: { children: testText },
  }

  const AntPatternComponent: JSX.Element = (
    <AntPattern options={buttonOptions} />
  )

  const { findByText } = render(AntPatternComponent)
  const expectedChildren: HTMLElement = await findByText(testText)

  expect(expectedChildren).toBeInTheDocument()
})

test('ant-pattern-input', async () => {
  const inputOptions: IAntPatternOptions<InputProps> = {
    element: Input,
    controllerCallback: (controller: IAntPatternComponent<InputProps>) => {
      controller.setValue(testText)
    },
  }

  const AntPatternComponent: JSX.Element = <AntPattern options={inputOptions} />

  const { findByDisplayValue } = render(AntPatternComponent)
  const expectedDisplayValue: HTMLElement = await findByDisplayValue(testText)

  expect(expectedDisplayValue).toBeInTheDocument()
})

test('ant-pattern-table', async () => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: jest.fn(),
  }))

  const tableData: string[] = ['t1', 't2', 't3', 't4', 't5', 't6']

  type ITableRecordType = {
    key: number
    name: string
    permissions: string
  }

  const tableColumns: IColumnsType<ITableRecordType> = [
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
  ]

  const tableDataSource: ITableRecordType[] = [
    { key: 0, name: tableData[0], permissions: tableData[1] },
    { key: 1, name: tableData[2], permissions: tableData[3] },
    { key: 2, name: tableData[4], permissions: tableData[5] },
  ]

  const tableOptions: IAntPatternOptions<TableProps<ITableRecordType>> = {
    element: Table,
    default: {
      dataSource: tableDataSource,
      columns: tableColumns,
    },
  }

  const AntPatternComponent: JSX.Element = <AntPattern options={tableOptions} />

  const { getByText } = render(AntPatternComponent)

  _.forEach(tableData, (text: string): void => {
    const expectedDisplayValue: HTMLElement = getByText(text)

    expect(expectedDisplayValue).toBeInTheDocument()
  })
})

test('ant-pattern-button-controller-usage', async () => {
  const buttonOptions: IAntPatternOptions<ButtonProps> = {
    element: Button,
    default: { type: 'primary' },
    controllerCallback: (controller: IAntPatternComponent<ButtonProps>) => {
      controller.update({ children: testText })
    },
  }

  const AntPatternComponent: JSX.Element = (
    <AntPattern options={buttonOptions} />
  )

  const { findByText, container } = render(AntPatternComponent)
  const expectedChildren: HTMLElement = await findByText(testText)

  expect(container.firstChild).toHaveClass('ant-btn')
  expect(container.firstChild).toHaveClass('ant-btn-primary')

  expect(expectedChildren).toBeInTheDocument()
})
