import { StepForwardOutlined, StepBackwardOutlined } from '@ant-design/icons'
import { Col, Row, Table, TableProps } from 'antd'
import { useCallback, useRef } from 'react'
import { ColumnsType } from 'antd/lib/table'
import moment from 'moment'
import _ from 'lodash'

import Checkbox from '../_antDesign/Checkbox/Checkbox'
import Calendar from '../_antDesign/Calendar/Calendar'
import Button from '../_antDesign/Button/Button'
import Input from '../_antDesign/Input/Input'
import Any from '../_antDesign/Any/Any'

import {
  IButtonComponent,
  IButtonOptions,
} from '../_antDesign/Button/Button.interface'
import {
  IInputComponent,
  IInputOptions,
} from '../_antDesign/Input/Input.interface'
import { ICalendarOptions } from '../_antDesign/Calendar/Calendar.interface'
import { ICheckboxOptions } from '../_antDesign/Checkbox/Checkbox.interface'
import { IAnyOptions } from '../_antDesign/Any/Any.interface'

const MainPage = (): JSX.Element => {
  const controlledButtonComponent = useRef<IButtonComponent>()
  const inputComponent = useRef<IInputComponent>()
  const controlledButtonIcon = useRef<JSX.Element>(
    <StepBackwardOutlined name={'stepBackwardOutlined'} />
  )

  //#region Button pattern example
  const toggleIconAtSecondButton = (): void => {
    switch (controlledButtonIcon.current?.props.name as string) {
      case 'stepForwardOutlined':
        controlledButtonIcon.current = (
          <StepBackwardOutlined name={'stepBackwardOutlined'} />
        )
        break
      default:
        controlledButtonIcon.current = (
          <StepForwardOutlined name={'stepForwardOutlined'} />
        )
        break
    }

    controlledButtonComponent.current?.optionButton({
      icon: controlledButtonIcon.current,
    })
  }

  const buttonReleasingEventOptions = useRef<IButtonOptions>({
    componentCallback: (component: IButtonComponent) => {
      controlledButtonComponent.current = component
    },
    buttonOptions: {
      type: 'primary',
      text: `I can control below button, let's click me 😊`,
      onClick: toggleIconAtSecondButton,
    },
  })

  const buttonControlledOptions = useRef<IButtonOptions>({
    componentCallback: (component: IButtonComponent) => {
      controlledButtonComponent.current = component
    },
    buttonOptions: {
      icon: controlledButtonIcon.current,
      type: 'primary',
      text: `He controls me! 😢`,
    },
    tooltipOptions: { title: 'Test button tooltip' },
  })
  //#endregion

  //#region Calendar pattern example
  const calendarDateCellRender = useCallback(
    (date: moment.Moment): JSX.Element => {
      console.log(date)
      return undefined as any
    },
    []
  )

  const calendarOptions = useRef<ICalendarOptions>({
    calendarOptions: {
      mode: 'month',
      fullscreen: false,
      dateCellRender: calendarDateCellRender,
      style: {
        width: '350px',
        height: '350px',
      },
    },
  })
  //#endregion

  //#region Checkbox pattern example
  const checkboxOptions = useRef<ICheckboxOptions>({
    checkboxOptions: {
      text: 'U can uncheck me 😃',
      defaultChecked: true,
      style: { color: 'whitesmoke' },
    },
    tooltipOptions: { title: 'This is checkbox' },
  })
  //#endregion

  //#region Table as Any pattern example
  type ITableRecordType = {
    key: number
    name: string
    permissions: 'admin' | 'dev' | 'client'
  }

  const tableColumns = useRef<ColumnsType<ITableRecordType>>([
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

  const tableOptions = useRef<IAnyOptions<TableProps<ITableRecordType>>>({
    element: Table,
    options: {
      dataSource: tableDataSource.current,
      columns: tableColumns.current,
    },
  })
  //#endregion

  //#region Input pattern example
  const inputOptions = useRef<IInputOptions>({
    componentCallback: (component: IInputComponent) => {
      inputComponent.current = component
    },
  })

  const setWatermelonAtInput = (): void => {
    inputComponent.current?.setValue('Watermelon')
  }

  const buttonChangeInputValue = useRef<IButtonOptions>({
    buttonOptions: {
      type: 'primary',
      text: `I can set word "Watermelon" at input! 🍉`,
      onClick: setWatermelonAtInput,
    },
  })
  //#endregion

  return (
    <div style={{ width: '100%' }}>
      <Row align={'middle'} justify={'center'}>
        <Col>
          <h1>Examples:</h1>
        </Col>
      </Row>

      <Row align={'middle'} justify={'center'}>
        <Col span={6}>
          <h2>Buttons with tooltips</h2>
          <Button options={buttonReleasingEventOptions.current} />
          <br />
          <Button options={buttonControlledOptions.current} />
        </Col>

        <Col span={6}>
          <h2>Calendar</h2>
          <p>Look at console log 😁</p>
          <Calendar options={calendarOptions.current} />
        </Col>
      </Row>

      <Row align={'middle'} justify={'center'}>
        <Col span={6}>
          <h2>Checkbox with tooltip</h2>
          <Checkbox options={checkboxOptions.current} />
        </Col>

        <Col span={6}>
          <h2>Input pattern</h2>
          <Input options={inputOptions.current} />
          <Button options={buttonChangeInputValue.current} />
        </Col>
      </Row>

      <Row align={'middle'} justify={'center'}>
        <Col span={12}>
          <h2>Any pattern</h2>
          <Any options={tableOptions.current} />
        </Col>
      </Row>
    </div>
  )
}

export default MainPage
