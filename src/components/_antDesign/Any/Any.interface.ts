import { TooltipPropsWithTitle } from 'antd/lib/tooltip'

export interface ITooltipExtendedOptions extends TooltipPropsWithTitle {}

export interface IAnyComponent<IAnyProps> {
  optionComponent: (params: IAnyProps) => void
  optionTooltip: (params: ITooltipExtendedOptions) => void
  repaint: () => void
}

export interface IAnyOptions<IAnyProps> {
  componentCallback?: (component: IAnyComponent<IAnyProps>) => void
  element: any
  options?: IAnyProps
  tooltipOptions?: ITooltipExtendedOptions
}
