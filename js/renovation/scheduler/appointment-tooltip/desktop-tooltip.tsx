import {
  Component, ComponentBindings, JSXComponent, OneWay, Event, Template,
} from 'devextreme-generator/component_declaration/common';
import noop from '../../utils/noop';
import { WidgetProps } from '../../widget';
import Tooltip from '../../tooltip';
import AppointmentList from './appointment-list';

const MAX_TOOLTIP_HEIGHT = 200;
const closeOnTargetScroll = () => false;

export const viewFunction = ({
  props: {
    appointmentData,
    target,
    checkAndDeleteAppointment,
    showAppointmentPopup,
    onHide,
    itemContent,
  },
}: DesktopTooltip) => (
  <Tooltip
    target={target}
    maxHeight={MAX_TOOLTIP_HEIGHT}
    height={200}
    closeOnTargetScroll={closeOnTargetScroll}
    contentTemplate={() => (
      <AppointmentList
        appointmentData={appointmentData}
        checkAndDeleteAppointment={checkAndDeleteAppointment}
        showAppointmentPopup={showAppointmentPopup}
        onHide={onHide}
        itemContent={itemContent}
        getTextAndFormatDate={viewModel.props.getTextAndFormatDate}
      />
    )}
  />
);

@ComponentBindings()
export class DesktopTooltipProps extends WidgetProps {
  @OneWay() appointmentData?: any;

  @OneWay() container?: HTMLDivElement;

  @OneWay() target?: HTMLDivElement;

  @OneWay() checkAndDeleteAppointment?: (data?: any, currentData?: any) => void = noop;

  @OneWay() showAppointmentPopup?: (data: any, visibleButtons: boolean, currentData: any) => void = noop;

  @Template() itemContent?: any;

  @Event() onHide?: () => void = noop;

  @OneWay() getTextAndFormatDate?: (data?: any, currentData?: any) => any = noop;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class DesktopTooltip extends JSXComponent<DesktopTooltipProps> {}
