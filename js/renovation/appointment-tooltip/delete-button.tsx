import {
  Component, ComponentBindings, JSXComponent,
} from 'devextreme-generator/component_declaration/common';
import Button, { ButtonProps } from '../button';
import {
  TOOLTIP_APPOINTMENT_ITEM_DELETE_BUTTON,
} from './consts';

export const viewFunction = ({
  restAttributes,
  props: {
    onClick,
  },
}: DeleteButton) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className={TOOLTIP_APPOINTMENT_ITEM_DELETE_BUTTON} {...restAttributes}>
    <Button icon="trash" stylingMode="text" onClick={onClick} />
  </div>

);

@ComponentBindings()
export class DeleteButtonProps extends ButtonProps {}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class DeleteButton extends JSXComponent<DeleteButtonProps> {}
