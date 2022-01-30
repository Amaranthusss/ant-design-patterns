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

const MainPage = (): JSX.Element => {
  const controlledButtonComponent = useRef<IButtonComponent>()
  const controlledButtonIcon = useRef<JSX.Element>()

  const setIconAtSecondButton = (): void => {
    switch (controlledButtonIcon.current) {
      case (<StepForwardOutlined />):
        controlledButtonIcon.current = <StepBackwardOutlined />
        break
      case (<StepBackwardOutlined />):
        controlledButtonIcon.current = <StepForwardOutlined />
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
      text: `Let's change the icon of second button! 😊`,
      onClick: setIconAtSecondButton,
    },
  })

  const buttonControlledOptions = useRef<IButtonOptions>({
    componentCallback: (component: IButtonComponent) => {
      controlledButtonComponent.current = component
    },
    buttonOptions: {
      icon: <StepForwardOutlined />,
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

  return (
    <div>
      <h1>Examples:</h1>
      <h2>Buttons</h2>
      <Button options={buttonReleasingEventOptions.current} />
      <br />
      <Button options={buttonControlledOptions.current} />
      <h2>Calendar</h2>
      <p>Look at console log 😁</p>
      <Calendar options={calendarOptions.current} />
    </div>
  )
}

export default MainPage
