import {
  Component, ComponentBindings, JSXComponent, OneWay, Event, Ref,
} from 'devextreme-generator/component_declaration/common';
import noop from '../utils/noop';
import { getWindow } from '../../core/utils/window';
import { WidgetProps } from '../widget';
import Overlay from '../overlay';
import AppointmentList from './appointment-list';

const animationConfigProps: any = {
  show: {
    type: 'slide',
    duration: 300,
    from: { position: { my: 'top', at: 'bottom', of: getWindow() } },
    to: { position: { my: 'center', at: 'center', of: getWindow() } },
  },
  hide: {
    type: 'slide',
    duration: 300,
    to: { position: { my: 'top', at: 'bottom', of: getWindow() } },
    from: { position: { my: 'center', at: 'center', of: getWindow() } },
  },
};

const positionConfigProps: any = {
  my: 'bottom',
  at: 'bottom',
  of: getWindow(),
};
const closeOnOutsideClick = true;
const MAX_OVERLAY_HEIGHT = 250;

export const viewFunction = ({
  onShown,
  props: {
    appointmentData,
    container,
    target,
    checkAndDeleteAppointment,
    showAppointmentPopup,
    onHide,
  },
}: MobileTooltip) => (
  <Overlay
    shading={false}
    positionConfig={positionConfigProps}
    animationConfig={animationConfigProps}
    target={target}
    container={container}
    closeOnOutsideClick={closeOnOutsideClick}
    width="100%"
    height="auto"
    onShowing={onShown}
    contentTemplate={() => (
      <AppointmentList
        appointmentData={appointmentData}
        checkAndDeleteAppointment={checkAndDeleteAppointment}
        showAppointmentPopup={showAppointmentPopup}
        onHide={onHide}
      />
    )}
  />
);

@ComponentBindings()
export class MobileTooltipProps extends WidgetProps {
  @OneWay() appointmentData?: any;

  @OneWay() container?: HTMLDivElement;

  @OneWay() target?: HTMLDivElement;

  @OneWay() checkAndDeleteAppointment?: (data?: any, currentData?: any) => void = noop;

  @OneWay() showAppointmentPopup?: (data: any, visibleButtons: boolean, currentData: any) => void = noop;

  @Event() onHide?: () => void = noop;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class MobileTooltip extends JSXComponent<MobileTooltipProps> {
  get onShown() {
    return (...props) => console.log(this.listRef);
  }
}
