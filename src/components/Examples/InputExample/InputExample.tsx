import { Button, ButtonProps, Input, InputProps } from 'antd'
import _ from 'lodash'
import { useRef } from 'react'

import AntPattern from '../../AntPattern/AntPattern'

import { IAntPatternComponent } from '../../AntPattern/AntPattern.interface'
import { IAntPatternOptions } from '../../AntPattern/AntPattern.interface'

const InputExample = (): JSX.Element => {
  const inputToChangePatternCtrl = useRef<IAntPatternComponent<InputProps>>()
  const inputToChangeOptions = useRef<IAntPatternOptions<InputProps>>({
    element: Input,
    default: { showCount: true },
    controllerCallback: (controller: IAntPatternComponent<InputProps>) => {
      inputToChangePatternCtrl.current = controller
    },
  })

  const setWatermelonAtInput = (): void => {
    if (_.isFunction(inputToChangePatternCtrl.current?.setValue)) {
      inputToChangePatternCtrl.current?.setValue('Watermelon')
    }
  }

  const buttonToChangeInputOptions = useRef<IAntPatternOptions<ButtonProps>>({
    element: Button,
    default: {
      type: 'primary',
      children: `I can set word "Watermelon" at input! 🍉`,
      onClick: setWatermelonAtInput,
    },
  })

  return (
    <>
      <h2>Input pattern</h2>
      <AntPattern options={inputToChangeOptions.current} />
      <AntPattern options={buttonToChangeInputOptions.current} />
    </>
  )
}

export default InputExample
