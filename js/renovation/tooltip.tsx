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

  @OneWay() closeOnTargetScroll?: boolean;

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
    const reactContent = React.createElement(this.props.contentTemplate, [], []);
    const renderTemplate = {
      render: ({ container }) => ReactDOM.render(
        reactContent, container,
      ),
    };

    // eslint-disable-next-line no-new
    new DxTooltip(this.widgetRef, { // eslint-disable-line no-new
      ...this.props as any,
      contentTemplate: renderTemplate,
    });
  }
}
