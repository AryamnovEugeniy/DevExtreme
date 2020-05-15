import {
  Component, ComponentBindings, JSXComponent, OneWay,
} from 'devextreme-generator/component_declaration/common';
// import { positionConfig } from '../../animation/position';
// import { animationConfig } from '../../animation/fx';
import { getWindow } from '../../core/utils/window';
import { WidgetProps } from '../widget';
import Overlay from '../overlay';
import TooltipItemContent from './tooltip-item-content';

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

export const viewFunction = (viewModel: MobileTooltip) => (
  <Overlay
    animationConfig={animationConfigProps}
    positionConfig={positionConfigProps}
    shading={false}
    width="100%"
    height={500}
    closeOnOutsideClick={closeOnOutsideClick}
    contentTemplate={TooltipItemContent}
  />
);

@ComponentBindings()
export class MobileTooltipProps extends WidgetProps {
  @OneWay() currentData?: any;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class MobileTooltip extends JSXComponent<MobileTooltipProps> {
}
