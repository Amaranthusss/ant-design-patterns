import { StepForwardOutlined, StepBackwardOutlined } from '@ant-design/icons'
import { Button, ButtonProps } from 'antd'
import { useRef } from 'react'

import AntPattern from '../../AntPattern/AntPattern'

import { IAntPatternComponent } from '../../AntPattern/AntPattern.interface'
import { IAntPatternOptions } from '../../AntPattern/AntPattern.interface'

const ButtonExample = (): JSX.Element => {
  const buttonToChangePatternCtrl = useRef<IAntPatternComponent<ButtonProps>>()
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

    buttonToChangePatternCtrl.current?.update({
      icon: controlledButtonIcon.current,
    })
  }

  const buttonToChangeIconOptions = useRef<IAntPatternOptions<ButtonProps>>({
    element: Button,
    default: {
      type: 'primary',
      children: `I can control below button, let's click me 😊`,
      onClick: toggleIconAtSecondButton,
    },
  })

  const buttonToChangeOptions = useRef<IAntPatternOptions<ButtonProps>>({
    element: Button,
    default: {
      icon: controlledButtonIcon.current,
      type: 'default',
      children: `He controls me! 😢`,
    },
    controllerCallback: (controller: IAntPatternComponent<ButtonProps>) => {
      buttonToChangePatternCtrl.current = controller
    },
  })

  return (
    <>
      <h2>Buttons with tooltips</h2>
      <AntPattern options={buttonToChangeIconOptions.current} />
      <br />
      <AntPattern options={buttonToChangeOptions.current} />
    </>
  )
}

export default ButtonExample
