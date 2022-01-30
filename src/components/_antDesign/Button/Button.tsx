import { useCallback, useEffect, useRef, useState, memo } from 'react'
import { Button, Tooltip } from 'antd'
import _ from 'lodash'

import {
  IButtonExtendedOptions,
  IButtonOptions,
  ITooltipExtendedOptions,
} from './Button.interface'
import { IComponentOptions } from '../../components.interface'

const ButtonPattern = (
  props: IComponentOptions<IButtonOptions>
): JSX.Element => {
  const [, forceUpdate] = useState<number>(0)

  const buttonOptions = useRef<IButtonExtendedOptions>(
    props.options?.buttonOptions ?? ({} as any)
  )

  const tooltipOptions = useRef<ITooltipExtendedOptions>(
    props.options?.tooltipOptions ?? ({} as any)
  )

  const repaint = useCallback((): void => {
    forceUpdate(_.random(true))
  }, [])

  const optionButton = useCallback((params: IButtonExtendedOptions): void => {
    buttonOptions.current = { ...buttonOptions.current, ...params }
    repaint()
  }, [])

  const optionTooltip = useCallback((params: ITooltipExtendedOptions): void => {
    tooltipOptions.current = { ...tooltipOptions.current, ...params }
    repaint()
  }, [])

  useEffect(() => {
    if (_.isFunction(props.options.componentCallback)) {
      props.options.componentCallback({
        optionButton,
        optionTooltip,
        repaint,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tooltip {...tooltipOptions.current}>
      <Button {...buttonOptions.current}>
        {buttonOptions.current?.text ?? ''}
      </Button>
    </Tooltip>
  )
}

export default memo(ButtonPattern, () => true)
