import { CalendarProps as ICalendarAntD } from 'antd'
import { Moment } from 'moment'

export interface ICalendarExtendedOptions extends ICalendarAntD<Moment> {}

export interface IButtonComponent {
  option: (params: ICalendarExtendedOptions) => void
}

export interface ICalendarOptions {
  componentCallback?: (component: IButtonComponent) => void
  calendarOptions?: ICalendarExtendedOptions
}
