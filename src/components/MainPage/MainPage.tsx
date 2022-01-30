import { StepForwardOutlined, StepBackwardOutlined } from '@ant-design/icons'
import moment from 'moment'
import { useCallback, useRef } from 'react'

import Button from '../_antDesign/Button/Button'

import {
  IButtonComponent,
  IButtonOptions,
} from '../_antDesign/Button/Button.interface'
import Calendar from '../_antDesign/Calendar/Calendar'
import { ICalendarOptions } from '../_antDesign/Calendar/Calendar.interface'
import Checkbox from '../_antDesign/Checkbox/Checkbox'
import { ICheckboxOptions } from '../_antDesign/Checkbox/Checkbox.interface'

const MainPage = (): JSX.Element => {
  const controlledButtonComponent = useRef<IButtonComponent>()
  const controlledButtonIcon = useRef<JSX.Element>(
    <StepBackwardOutlined name={'stepBackwardOutlined'} />
  )

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

  const checkboxOptions = useRef<ICheckboxOptions>({
    checkboxOptions: {
      text: 'U can uncheck me 😃',
      defaultChecked: true,
      style: { color: 'whitesmoke' },
    },
    tooltipOptions: { title: 'This is checkbox' },
  })

  return (
    <div>
      <h1>Examples:</h1>
      <h2>Buttons with tooltips</h2>
      <Button options={buttonReleasingEventOptions.current} />
      <br />
      <Button options={buttonControlledOptions.current} />
      <h2>Calendar</h2>
      <p>Look at console log 😁</p>
      <Calendar options={calendarOptions.current} />
      <h2>Checkbox with tooltip</h2>
      <Checkbox options={checkboxOptions.current} />
    </div>
  )
}

export default MainPage
