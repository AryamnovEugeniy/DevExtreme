
import ReactDOM from 'react-dom';
import {
  Component, ComponentBindings, JSXComponent, OneWay, Ref, Effect, Template,
} from 'devextreme-generator/component_declaration/common';
// import { animationConfig } from '../animation/fx';
// import { positionConfig } from '../animation/position';
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

  @Template() contentTemplate?: any;
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
    console.log(this.props);
    // const reactElement = <this.props.contentTemplate />;
    // ReactDOM.render(
    //   this.props.contentTemplate, this.widgetRef, (prop) => console.log(prop),
    // );
    console.log(document.getElementById('myId'));
    ReactDOM.render(
      this.props.contentTemplate, document.getElementById('myId'), () => console.log('hi'),
    );
    // const renderTemplate = {
    //   render: (props) => {
    //     console.log(props.container);
    //     return ReactDOM.render(
    //       <this.props.contentTemplate />, document.getElementById('app'),
    //     );
    //   },
    // };
    // // eslint-disable-next-line no-new
    // new DxOverlay(this.widgetRef, { // eslint-disable-line no-new
    //   ...this.props as any,
    //   width: 100,
    //   height: 150,
    //   contentTemplate: renderTemplate,
    // });
  }
}
