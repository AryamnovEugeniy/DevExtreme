
import ReactDOM from 'react-dom';
import {
  Component, ComponentBindings, JSXComponent, OneWay, Ref, Effect,
} from 'devextreme-generator/component_declaration/common';
import { WidgetProps } from './widget';
import DxOverlay from '../ui/overlay';

export const viewFunction = (viewModel: Overlay) => (
  <div ref={viewModel.widgetRef as any} id="myId" />
);
@ComponentBindings()
export class OverlayProps extends WidgetProps {
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
export default class Overlay extends JSXComponent<OverlayProps> {
  @Ref()
  widgetRef!: HTMLDivElement;

  @Ref()
  contentRef!: HTMLDivElement;

  @Effect()
  setupWidget() {
    const reactContent = React.createElement(this.props.contentTemplate, [], []);
    const renderTemplate = {
      render: ({ container }) => ReactDOM.render(
        reactContent, container,
      ),
    };

    // eslint-disable-next-line no-new
    new DxOverlay(this.widgetRef, {
      ...this.props as any,
      contentTemplate: renderTemplate,
    });
  }
}
