import {
  Component, ComponentBindings, JSXComponent, OneWay,
} from 'devextreme-generator/component_declaration/common';
// import { positionConfig } from '../../animation/position';
// import { animationConfig } from '../../animation/fx';
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

export const viewFunction = ({ props: { appointmentData } }: MobileTooltip) => (
  <Overlay
    animationConfig={animationConfigProps}
    positionConfig={positionConfigProps}
    shading={false}
    width="100%"
    height="auto"
    maxHeight={MAX_OVERLAY_HEIGHT}
    closeOnOutsideClick={closeOnOutsideClick}
    contentTemplate={() => <AppointmentList appointmentData={appointmentData} />}
  />
);

@ComponentBindings()
export class MobileTooltipProps extends WidgetProps {
  @OneWay() appointmentData?: any;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class MobileTooltip extends JSXComponent<MobileTooltipProps> {}
