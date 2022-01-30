import { CheckboxProps as ICheckboxAntD } from 'antd'
import { TooltipPropsWithTitle } from 'antd/lib/tooltip'

export interface ICheckboxExtendedOptions extends ICheckboxAntD {
  /** Displayed text at the checkbox. */
  text?: string
}

export interface ITooltipExtendedOptions extends TooltipPropsWithTitle {}

export interface ICheckboxComponent {
  optionCheckbox: (params: ICheckboxExtendedOptions) => void
  optionTooltip: (params: ITooltipExtendedOptions) => void
}

export interface ICheckboxOptions {
  componentCallback?: (component: ICheckboxComponent) => void
  checkboxOptions?: ICheckboxExtendedOptions
  tooltipOptions?: ITooltipExtendedOptions
}
