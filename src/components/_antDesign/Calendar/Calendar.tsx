import { useCallback, useEffect, useRef, useState, memo } from 'react'
import { Calendar } from 'antd'
import _ from 'lodash'

import {
  ICalendarExtendedOptions,
  ICalendarOptions,
} from './Calendar.interface'
import { IComponentOptions } from '../../components.interface'

const CalendarPattern = (
  props: IComponentOptions<ICalendarOptions>
): JSX.Element => {
  const [, forceUpdate] = useState<number>(0)

  const calendarOptions = useRef<ICalendarExtendedOptions>(
    props.options?.calendarOptions ?? {}
  )

  const repaint = useCallback((): void => {
    forceUpdate(_.random(true))
  }, [])

  const option = useCallback((params: ICalendarExtendedOptions): void => {
    calendarOptions.current = { ...calendarOptions.current, ...params }
    repaint()
  }, [])

  useEffect(() => {
    if (_.isFunction(props.options.componentCallback)) {
      props.options.componentCallback({
        option,
        repaint,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Calendar {...calendarOptions.current} />
}

export default memo(CalendarPattern, () => true)
