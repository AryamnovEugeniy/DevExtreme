import {
  Ref, Effect, Component, ComponentBindings, JSXComponent,
} from 'devextreme-generator/component_declaration/common';
import { ButtonProps } from './button';
import DxButton from '../ui/button';

export const viewFunction = ({ widgetRef }: WrappedButton) => (<div ref={widgetRef as any} />);

@ComponentBindings()
export class WrappedButtonProps extends ButtonProps {}
@Component({
  defaultOptionRules: null,
  jQuery: { register: true },
  view: viewFunction,
})
export default class WrappedButton extends JSXComponent<WrappedButtonProps> {
  @Ref()
  widgetRef!: HTMLDivElement;

  @Effect()
  setupWidget() {
    new DxButton(this.widgetRef, { // eslint-disable-line no-new
      ...this.props as any,
    });
  }
}
