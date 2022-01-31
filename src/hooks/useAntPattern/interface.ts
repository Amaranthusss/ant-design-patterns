import { TooltipPropsWithTitle } from 'antd/lib/tooltip'
import { ChangeEvent } from 'react'

export interface ITooltipExtendedOptions extends TooltipPropsWithTitle {}

export type IValue = string | number | readonly string[] | undefined

export interface IPatternPropsExtension {
  children: string | JSX.Element
}

export interface IPatternComponent<IPatternProps> {
  /** Update any param of Ant Design component */
  update: (params: IPatternProps & IPatternPropsExtension) => void
  /** Update any param of Ant Design Tooltip component */
  updateTooltip: (params: ITooltipExtendedOptions) => void
  /** Method to control forms, inputs, textareas */
  setValue: (value: IValue) => void
}

export interface IPatternOptions<IPatternProps> {
  /** Ant Design any component */
  element: any
  /** Ant Design any component's props */
  default?: IPatternProps
  /** Default Ant Design Tooltip component configuration */
  tooltipOptions?: ITooltipExtendedOptions
  /** Event dedicated for forms, inputs, textareas */
  onChange?: (event: ChangeEvent<any>) => void
}
