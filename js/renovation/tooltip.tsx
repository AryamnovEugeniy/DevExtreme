import * as Preact from 'preact';
import {
  Component, ComponentBindings, JSXComponent, OneWay, Ref, Effect,
} from 'devextreme-generator/component_declaration/common';
import { WidgetProps } from './widget';
import DxTooltip from '../ui/tooltip';

export const viewFunction = ({ widgetRef }: Tooltip) => <div ref={widgetRef as any} />;

@ComponentBindings()
export class TooltipProps extends WidgetProps {
  @OneWay() maxHeight?: number | string;

  @OneWay() rtlEnabled?: boolean;

  @OneWay() target?: HTMLDivElement;

  @OneWay() closeOnTargetScroll?: () => boolean;

  @OneWay() onShowing?: () => void;

  @OneWay() onShown?: () => void;

  @OneWay() contentTemplate?: any;
}

@Component({
  defaultOptionRules: null,
  jQuery: { register: true },
  view: viewFunction,
})
export default class Tooltip extends JSXComponent<TooltipProps> {
  @Ref()
  widgetRef!: HTMLDivElement;

  @Effect()
  setupWidget() {
    const { contentTemplate } = this.props;
    const renderTemplate = (container) => {
      setTimeout(() => {
        Preact.render(Preact.h(contentTemplate, {}), container.get(0));
      }, 0);
    };

    // eslint-disable-next-line no-new
    new DxTooltip(this.widgetRef, {
      ...this.props as any,
      contentTemplate: renderTemplate,
    });
  }
}
