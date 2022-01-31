import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { Tooltip } from 'antd'
import _ from 'lodash'

import {
  ITooltipExtendedOptions,
  IPatternComponent,
  IPatternOptions,
  IValue,
} from './interface'

const useAntPattern = (props: IPatternOptions<any>) => {
  const [value, setValue] = useState<IValue>()
  const [options, setOptions] = useState<any>(props.default ?? {})
  const [tooltipOptions, setTooltipOptions] = useState<any>(
    props.tooltipOptions ?? ({} as any)
  )

  const option = useCallback((params: any): void => {
    setOptions({ ...options, ...params })
  }, [])

  const optionTooltip = useCallback((params: ITooltipExtendedOptions): void => {
    setTooltipOptions({ ...tooltipOptions, ...params })
  }, [])

  const onChange = useCallback(
    (event: ChangeEvent<any>): void => {
      setValue(event.target.value)
      if (_.isFunction(props.default?.onChange)) {
        props.default?.onChange(event)
      }
    },
    [props.default]
  )

  const component = useRef<IPatternComponent<any>>({
    update: option,
    updateTooltip: optionTooltip,
    setValue,
  })

  return {
    element: (
      <Tooltip {...tooltipOptions}>
        <props.element {...options} onChange={onChange} value={value}>
          {options?.children ?? undefined}
        </props.element>
      </Tooltip>
    ),
    controller: component.current,
  }
}

export default useAntPattern
