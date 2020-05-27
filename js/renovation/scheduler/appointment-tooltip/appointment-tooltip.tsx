import {
  Component, ComponentBindings, JSXComponent, OneWay, TwoWay, Method, Template, Event, Ref,
} from 'devextreme-generator/component_declaration/common';
import noop from '../../utils/noop';
import { WidgetProps } from '../../widget';
import MobileTooltip from './mobile-tooltip';
import DesktopTooltip from './desktop-tooltip';

const SLIDE_PANEL_CLASS_NAME = 'dx-scheduler-overlay-panel';
const APPOINTMENT_TOOLTIP_WRAPPER_CLASS = 'dx-scheduler-appointment-tooltip-wrapper';

export const viewFunction = (viewModel: AppointmentTooltip) => {
  const Tooltip = viewModel.props.adaptivityEnabled ? MobileTooltip : DesktopTooltip;
  console.log(viewModel.props);
  return viewModel.visible ? (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={viewModel.className} ref={viewModel.contentRef as any} {...viewModel.restAttributes}>
      <Tooltip
        appointmentData={viewModel.appointmentData}
        onHide={viewModel.onHide}
        target={viewModel.target}
        container={viewModel.props.container}
        checkAndDeleteAppointment={viewModel.props.checkAndDeleteAppointment}
        showAppointmentPopup={viewModel.props.showAppointmentPopup}
        itemContent={viewModel.props.appointmentTooltipContent}
        getTextAndFormatDate={viewModel.props.getTextAndFormatDate}
      />
    </div>
  ) : null;
};

@ComponentBindings()
export class AppointmentTooltipProps extends WidgetProps {
  @OneWay() adaptivityEnabled?: boolean = false;

  @OneWay() container?: HTMLDivElement;

  @TwoWay() target?: HTMLDivElement;

  @OneWay() checkAndDeleteAppointment?: (data?: any, currentData?: any) => void = noop;

  @OneWay() showAppointmentPopup?: (data: any, visibleButtons: boolean, currentData: any) => void = noop;

  @TwoWay() appointmentData?: Array<any> = [];

  @TwoWay() visible?: boolean = true;

  @Event() visibleChange?: any = noop;

  // TODO: consider renaming to appointmentTooltipTemplate
  @Template() appointmentTooltipContent?: any;

  @OneWay() getTextAndFormatDate?: (data?: any, currentData?: any) => any = noop;
}

@Component({
  defaultOptionRules: null,
  jQuery: {
    register: true,
  },
  view: viewFunction,
})
export default class AppointmentTooltip extends JSXComponent<AppointmentTooltipProps> {
  target?: HTMLDivElement;

  appointmentData?: any;

  visible?: boolean;

  @Ref()
  contentRef?: HTMLDivElement;

  get className() {
    const { adaptivityEnabled } = this.props;
    return adaptivityEnabled ? SLIDE_PANEL_CLASS_NAME : APPOINTMENT_TOOLTIP_WRAPPER_CLASS;
  }

  @Method()
  hide() {
    console.log('here');
    this.visible = false;
  }

  @Method()
  show(target, data) {
    console.log(target);
    this.target = target;
    this.visible = true;
    this.appointmentData = data;
  }

  @Method()
  isAlreadyShown() {
    console.log(this.visible);
    return this.visible;
  }

  onHide() {
    console.log('hello');
    this.visible = false;
    // return this.hide();
  }
}
