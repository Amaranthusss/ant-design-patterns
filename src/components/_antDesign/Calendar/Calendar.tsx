import { useCallback, useEffect, useRef, useState, memo } from 'react'
import { Calendar } from 'antd'
import _ from 'lodash'

import { IComponentOptions } from '../../components.interface'
import {
  ICalendarExtendedOptions,
  ICalendarOptions,
} from './Calendar.interface'

const CalendarPattern = (
  props: IComponentOptions<ICalendarOptions>
): JSX.Element => {
  const [, forceUpdate] = useState<number>(0)

  const calendarOptions = useRef<ICalendarExtendedOptions>(
    props.options?.calendarOptions ?? {}
  )

  const option = useCallback((params: ICalendarExtendedOptions): void => {
    calendarOptions.current = { ...calendarOptions.current, ...params }
    forceUpdate(_.random(true))
  }, [])

  useEffect(() => {
    if (_.isFunction(props.options.componentCallback)) {
      props.options.componentCallback({
        option,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Calendar {...calendarOptions.current} />
}

export default memo(CalendarPattern, () => true)
