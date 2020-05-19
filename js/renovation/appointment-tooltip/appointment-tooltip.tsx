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
  const { adaptivityEnabled, appointmentData } = viewModel.props;
  const Tooltip = adaptivityEnabled ? MobileTooltip : MobileTooltip;
  return viewModel.props.visible ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={viewModel.className} {...viewModel.restAttributes}>
      <Tooltip appointmentData={appointmentData} />
    </div>
  ) : null;
};

@ComponentBindings()
export class AppointmentTooltipProps extends WidgetProps {
  @OneWay() adaptivityEnabled?: boolean = false;

  @OneWay() visible?: boolean = false;

  @OneWay() appointmentData?: Array<any> = [];
}

@Component({
  defaultOptionRules: null,
  jQuery: { register: true },
  view: viewFunction,
})
export default class AppointmentTooltip extends JSXComponent<AppointmentTooltipProps> {
  get className() {
    const { adaptivityEnabled } = this.props;
    return adaptivityEnabled ? SLIDE_PANEL_CLASS_NAME : APPOINTMENT_TOOLTIP_WRAPPER_CLASS;
  }
}
