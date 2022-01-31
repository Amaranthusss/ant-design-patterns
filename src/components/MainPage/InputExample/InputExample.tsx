import { Button, ButtonProps, Input, InputProps } from 'antd'
import { useRef } from 'react'

import useAntPattern from '../../../hooks/useAntPattern'

import { IPatternOptions } from '../../../hooks/useAntPattern/interface'

const InputExample = (): JSX.Element => {
  const inputToChangeOptions = useRef<IPatternOptions<InputProps>>({
    element: Input,
    default: { showCount: true },
  })

  const setWatermelonAtInput = (): void => {
    inputToChangePattern.controller.setValue('Watermelon')
  }

  const buttonToChangeInputOptions = useRef<IPatternOptions<ButtonProps>>({
    element: Button,
    default: {
      type: 'primary',
      children: `I can set word "Watermelon" at input! 🍉`,
      onClick: setWatermelonAtInput,
    },
  })

  const inputToChangePattern = useAntPattern(inputToChangeOptions.current)
  const buttonToChangeInputPattern = useAntPattern(
    buttonToChangeInputOptions.current
  )

  return (
    <>
      <h2>Input pattern</h2>
      {inputToChangePattern.element}
      {buttonToChangeInputPattern.element}
    </>
  )
}

export default InputExample
