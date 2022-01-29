import { DownOutlined, MailOutlined } from '@ant-design/icons'
import { useRef } from 'react'

import Button from '../_antDesign/Button/Button'

import {
  IButtonComponent,
  IButtonOptions,
} from '../_antDesign/Button/Button.interface'

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

  return (
    <div>
      <h1>Examples:</h1>
      <br />
      <Button options={buttonReleasingEventOptions.current} />
      <br />
      <Button options={buttonControlledOptions.current} />
    </div>
  )
}

export default MainPage
