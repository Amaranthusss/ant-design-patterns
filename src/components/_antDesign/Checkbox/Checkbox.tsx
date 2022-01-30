import { useCallback, useEffect, useRef, useState, memo } from 'react'
import { Checkbox, Tooltip } from 'antd'
import _ from 'lodash'

import { IComponentOptions } from '../../components.interface'
import {
  ICheckboxExtendedOptions,
  ICheckboxOptions,
  ITooltipExtendedOptions,
} from './Checkbox.interface'

const CheckboxPattern = (
  props: IComponentOptions<ICheckboxOptions>
): JSX.Element => {
  const [, forceUpdate] = useState<number>(0)

  const checkboxOptions = useRef<ICheckboxExtendedOptions>(
    props.options?.checkboxOptions ?? ({} as any)
  )

  const tooltipOptions = useRef<ITooltipExtendedOptions>(
    props.options?.tooltipOptions ?? ({} as any)
  )

  const optionCheckbox = useCallback(
    (params: ICheckboxExtendedOptions): void => {
      checkboxOptions.current = { ...checkboxOptions.current, ...params }
      forceUpdate(_.random(true))
    },
    []
  )

  const optionTooltip = useCallback((params: ITooltipExtendedOptions): void => {
    tooltipOptions.current = { ...tooltipOptions.current, ...params }
    forceUpdate(_.random(true))
  }, [])

  useEffect(() => {
    if (_.isFunction(props.options.componentCallback)) {
      props.options.componentCallback({
        optionCheckbox,
        optionTooltip,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tooltip {...tooltipOptions.current}>
      <Checkbox {...checkboxOptions.current}>
        {checkboxOptions.current?.text ?? ''}
      </Checkbox>
    </Tooltip>
  )
}

export default memo(CheckboxPattern, () => true)
