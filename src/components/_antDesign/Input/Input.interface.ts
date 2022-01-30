import { InputProps as IInputAntD } from 'antd'
import { TooltipPropsWithTitle } from 'antd/lib/tooltip'

export interface IInputExtendedOptions extends IInputAntD {}

export interface ITooltipExtendedOptions extends TooltipPropsWithTitle {}

export interface IInputComponent {
  optionInput: (params: IInputExtendedOptions) => void
  optionTooltip: (params: ITooltipExtendedOptions) => void
  setValue: (value: string | number | readonly string[] | undefined) => void
  repaint: () => void
}

export interface IInputOptions {
  componentCallback?: (component: IInputComponent) => void
  inputOptions?: IInputExtendedOptions
  tooltipOptions?: ITooltipExtendedOptions
}
