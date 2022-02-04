import { useCallback, useEffect, useState } from 'react'
import { Tooltip } from 'antd'
import _ from 'lodash'

import { useOnInputChanged } from '../../hooks/useAntPattern'

import { ITooltipExtendedOptions } from './AntPattern.interface'
import { IAntPatternOptions } from './AntPattern.interface'
import { IComponentOptions } from '../components.interface'

const AntPattern = (props: IComponentOptions<IAntPatternOptions<any>>) => {
  const [options, setOptions] = useState<any>(props.options.default ?? {})
  const [tooltipOptions, setTooltipOptions] = useState<any>(
    props.options.tooltipOptions ?? ({} as any)
  )
  const { value, setValue, onChange } = useOnInputChanged(props.options)

  const updateHandler = useCallback(
    (params: any): void => {
      setOptions({ ...options, ...params })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const updateTolltipHandler = useCallback(
    (params: ITooltipExtendedOptions): void => {
      setTooltipOptions({ ...tooltipOptions, ...params })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(
    () => {
      if (_.isFunction(props.options.controllerCallback)) {
        props.options.controllerCallback({
          update: updateHandler,
          updateTooltip: updateTolltipHandler,
          setValue,
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  console.log('Ant pattern rendered')

  return (
    <Tooltip {...tooltipOptions}>
      <props.options.element {...options} onChange={onChange} value={value}>
        {options?.children ?? undefined}
      </props.options.element>
    </Tooltip>
  )
}

export default AntPattern
