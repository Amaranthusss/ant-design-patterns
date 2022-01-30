import { DownOutlined, MailOutlined } from '@ant-design/icons'
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
  const buttonControlledComponent = useRef<IButtonComponent>()

  const setIconAtSecondButton = (): void => {
    buttonControlledComponent.current?.optionButton({ icon: <MailOutlined /> })
  }

  const buttonReleasingEventOptions = useRef<IButtonOptions>({
    componentCallback: (component: IButtonComponent) => {
      buttonControlledComponent.current = component
    },
    buttonOptions: {
      type: 'primary',
      text: `Let's change the icon of second button! 😊`,
      onClick: setIconAtSecondButton,
    },
  })

  const buttonControlledOptions = useRef<IButtonOptions>({
    componentCallback: (component: IButtonComponent) => {
      buttonControlledComponent.current = component
    },
    buttonOptions: {
      icon: <DownOutlined />,
      type: 'primary',
      text: `He controls me! 😢`,
    },
    tooltipOptions: { title: 'Test button tooltip' },
  })

  const calendarDateCellRender = useCallback(
    (date: moment.Moment): JSX.Element => {
      console.log(date.date())
      return <span />
    },
    []
  )

  const calendarOptions = useRef<ICalendarOptions>({
    calendarOptions: {
      mode: 'month',
      fullscreen: true,
      dateCellRender: calendarDateCellRender,
    },
  })

  return (
    <>
      <h1>Examples:</h1>
      <Button options={buttonReleasingEventOptions.current} />
      <Button options={buttonControlledOptions.current} />
      <div style={{ width: '500px' }}>
        <Calendar options={calendarOptions.current} />
      </div>
    </>
  )
}

export default MainPage
