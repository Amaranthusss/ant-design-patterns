import { StepForwardOutlined, StepBackwardOutlined } from '@ant-design/icons'
import { Button, ButtonProps } from 'antd'
import { useRef } from 'react'

import useAntPattern from '../../../hooks/useAntPattern'

import { IPatternOptions } from '../../../hooks/useAntPattern/interface'

const ButtonExample = (): JSX.Element => {
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

    buttonToChangePattern.controller.update({
      icon: controlledButtonIcon.current,
    })
  }

  const buttonToChangeIconOptions = useRef<IPatternOptions<ButtonProps>>({
    element: Button,
    default: {
      type: 'primary',
      children: `I can control below button, let's click me 😊`,
      onClick: toggleIconAtSecondButton,
    },
  })

  const buttonToChangeOptions = useRef<IPatternOptions<ButtonProps>>({
    element: Button,
    default: {
      icon: controlledButtonIcon.current,
      type: 'default',
      children: `He controls me! 😢`,
    },
  })

  const buttonToChangePattern = useAntPattern(buttonToChangeOptions.current)
  const buttonToChangeIconPattern = useAntPattern(
    buttonToChangeIconOptions.current
  )

	return (
    <>
      <h2>Buttons with tooltips</h2>
      {buttonToChangeIconPattern.element}
      <br />
      {buttonToChangePattern.element}
    </>
  )
}

export default ButtonExample
