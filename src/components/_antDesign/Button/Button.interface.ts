import { ButtonProps as IButtonAntD } from 'antd'
import { TooltipPropsWithTitle } from 'antd/lib/tooltip'

export interface IButtonExtendedOptions extends IButtonAntD {
  /** Displayed text at the button. */
  text?: string
}

export interface ITooltipExtendedOptions extends TooltipPropsWithTitle {}

export interface IButtonComponent {
  optionButton: (params: IButtonExtendedOptions) => void
  optionTooltip: (params: ITooltipExtendedOptions) => void
}

export interface IButtonOptions {
  componentCallback?: (component: IButtonComponent) => void
  buttonOptions?: IButtonExtendedOptions
  tooltipOptions?: ITooltipExtendedOptions
}
