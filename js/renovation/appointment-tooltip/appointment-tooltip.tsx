import {
  Component, ComponentBindings, JSXComponent, OneWay,
} from 'devextreme-generator/component_declaration/common';
// import { positionConfig } from '../../animation/position';
// import { animationConfig } from '../../animation/fx';
import { WidgetProps } from '../widget';
import MobileTooltip from './mobile-tooltip';

const SLIDE_PANEL_CLASS_NAME = 'dx-scheduler-overlay-panel';
const APPOINTMENT_TOOLTIP_WRAPPER_CLASS = 'dx-scheduler-appointment-tooltip-wrapper';

export const viewFunction = (viewModel: AppointmentTooltip) => {
  const { adaptabilityEnabled } = viewModel.props;
  const Tooltip = adaptabilityEnabled ? MobileTooltip : MobileTooltip;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={viewModel.className} {...viewModel.restAttributes}>
      <Tooltip />
    </div>
  );
};

@ComponentBindings()
export class AppointmentTooltipProps extends WidgetProps {
  @OneWay() adaptabilityEnabled?: boolean;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class AppointmentTooltip extends JSXComponent<AppointmentTooltipProps> {
  get className() {
    const { adaptabilityEnabled } = this.props;
    return adaptabilityEnabled ? SLIDE_PANEL_CLASS_NAME : APPOINTMENT_TOOLTIP_WRAPPER_CLASS;
  }
}
