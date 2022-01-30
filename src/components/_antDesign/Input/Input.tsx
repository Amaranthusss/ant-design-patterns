import {
  useCallback,
  useEffect,
  useRef,
  useState,
  memo,
  ChangeEvent,
} from 'react'
import { Input, Tooltip } from 'antd'
import _ from 'lodash'

import {
  IInputExtendedOptions,
  IInputOptions,
  ITooltipExtendedOptions,
} from './Input.interface'
import { IComponentOptions } from '../../components.interface'

const ButtonPattern = (
  props: IComponentOptions<IInputOptions>
): JSX.Element => {
  const [, forceUpdate] = useState<number>(0)
  const [value, setValue] = useState<
    string | number | readonly string[] | undefined
  >(props.options.inputOptions?.defaultValue ?? '')

  const inputOptions = useRef<IInputExtendedOptions>(
    props.options?.inputOptions ?? ({} as any)
  )

  const tooltipOptions = useRef<ITooltipExtendedOptions>(
    props.options?.tooltipOptions ?? ({} as any)
  )

  const onChange = useCallback((event: ChangeEvent<any>) => {
    setValue(event.target.value)
    if (_.isFunction(props.options.inputOptions?.onChange)) {
      props.options.inputOptions?.onChange(event)
    }
  }, [])

  const repaint = useCallback((): void => {
    forceUpdate(_.random(true))
  }, [])

  const optionInput = useCallback((params: IInputExtendedOptions): void => {
    inputOptions.current = { ...inputOptions.current, ...params }
    repaint()
  }, [])

  const optionTooltip = useCallback((params: ITooltipExtendedOptions): void => {
    tooltipOptions.current = { ...tooltipOptions.current, ...params }
    repaint()
  }, [])

  useEffect(() => {
    if (_.isFunction(props.options.componentCallback)) {
      props.options.componentCallback({
        optionInput: optionInput,
        optionTooltip,
        repaint,
        setValue,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tooltip {...tooltipOptions.current}>
      <Input {...inputOptions.current} onChange={onChange} value={value} />
    </Tooltip>
  )
}

export default memo(ButtonPattern, () => true)
