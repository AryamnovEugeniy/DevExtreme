import {
  Component, ComponentBindings, JSXComponent, OneWay, TwoWay, Method, Template,
} from 'devextreme-generator/component_declaration/common';
import noop from '../utils/noop';
import { WidgetProps } from '../widget';
import MobileTooltip from './mobile-tooltip';
import DesktopTooltip from './desktop-tooltip';

const SLIDE_PANEL_CLASS_NAME = 'dx-scheduler-overlay-panel';
const APPOINTMENT_TOOLTIP_WRAPPER_CLASS = 'dx-scheduler-appointment-tooltip-wrapper';

export const viewFunction = ({
  className,
  restAttributes,
  onHide,
  props: {
    adaptivityEnabled,
    appointmentData,
    visible,
    target,
    container,
    showAppointmentPopup,
    checkAndDeleteAppointment,
  },
}: AppointmentTooltip) => {
  const Tooltip = adaptivityEnabled ? MobileTooltip : DesktopTooltip;
  return visible ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={className} {...restAttributes}>
      <Tooltip
        appointmentData={appointmentData}
        onHide={onHide}
        target={target}
        container={container}
        checkAndDeleteAppointment={checkAndDeleteAppointment}
        showAppointmentPopup={showAppointmentPopup}
      />
    </div>
  ) : null;
};

@ComponentBindings()
export class AppointmentTooltipProps extends WidgetProps {
  @OneWay() adaptivityEnabled?: boolean = false;

  @OneWay() appointmentData?: Array<any> = [];

  @OneWay() container?: HTMLDivElement;

  @OneWay() target?: HTMLDivElement;

  @OneWay() checkAndDeleteAppointment?: (data?: any, currentData?: any) => void = noop;

  @OneWay() showAppointmentPopup?: (data: any, visibleButtons: boolean, currentData: any) => void = noop;

  @TwoWay() visible?: boolean = true;

  @Template() appointmentTooltipTemplate?: any;
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

  @Method()
  hide() {
    this.props.visible = false;
  }

  @Method()
  show() {
    this.props.visible = true;
  }

  onHide() {
    console.log('hide');
    return () => this.hide();
  }
}
