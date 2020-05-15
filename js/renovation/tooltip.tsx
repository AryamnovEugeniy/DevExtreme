import {
  Component, ComponentBindings, JSXComponent, OneWay, Ref, Effect,
} from 'devextreme-generator/component_declaration/common';
// import { animationConfig } from '../animation/fx';
// import { positionConfig } from '../animation/position';
import { WidgetProps } from './widget';
import DxTooltip from '../ui/tooltip';

export const viewFunction = ({ widgetRef }: Tooltip) => <div ref={widgetRef as any} />;

@ComponentBindings()
export class TooltipProps extends WidgetProps {
  @OneWay() shading?: boolean;

  @OneWay() positionConfig?: any;

  @OneWay() animationConfig?: any;

  @OneWay() width?: number | string;

  @OneWay() height?: number | string;

  @OneWay() dragEnabled?: boolean;

  @OneWay() target?: HTMLDivElement;

  @OneWay() container?: HTMLDivElement;

  @OneWay() closeOnOutsideClick?: boolean;

  @OneWay() onShowing?: () => void;

  @OneWay() onShown?: () => void;

  @OneWay() contentTemplate?: any;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class Tooltip extends JSXComponent<TooltipProps> {
  @Ref()
  widgetRef!: HTMLDivElement;

  @Effect()
  setupWidget() {
    // eslint-disable-next-line no-new
    new DxTooltip(this.widgetRef, { // eslint-disable-line no-new
      ...this.props as any,
    });
  }
}
