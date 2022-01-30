import { useCallback, useEffect, useRef, useState, memo } from 'react'
import { Tooltip } from 'antd'
import _ from 'lodash'

import { IAnyOptions, ITooltipExtendedOptions } from './Any.interface'
import { IComponentOptions } from '../../components.interface'

const AnyPattern = (
  props: IComponentOptions<IAnyOptions<any>>
): JSX.Element => {
  const [, forceUpdate] = useState<number>(0)
  const options = useRef<any>(props.options?.options ?? {})
  const tooltipOptions = useRef<ITooltipExtendedOptions>(
    props.options?.tooltipOptions ?? ({} as any)
  )

  const repaint = useCallback((): void => {
    forceUpdate(_.random(true))
  }, [])

  const option = useCallback((params: any): void => {
    options.current = { ...options.current, ...params }
    repaint()
  }, [])

  const optionTooltip = useCallback((params: ITooltipExtendedOptions): void => {
    tooltipOptions.current = { ...tooltipOptions.current, ...params }
    repaint()
  }, [])

  useEffect(() => {
    if (_.isFunction(props.options.componentCallback)) {
      props.options.componentCallback({
        optionComponent: option,
        optionTooltip,
        repaint,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tooltip {...tooltipOptions.current}>
      <props.options.element {...options.current}>
        {options.current?.text ?? undefined}
      </props.options.element>
    </Tooltip>
  )
}

export default memo(AnyPattern, () => true)
