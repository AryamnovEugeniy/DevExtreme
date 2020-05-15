import {
  Component, ComponentBindings, JSXComponent,
} from 'devextreme-generator/component_declaration/common';
import Button, { ButtonProps } from '../button';
import {
  TOOLTIP_APPOINTMENT_ITEM_DELETE_BUTTON,
} from './consts';

export const viewFunction = (viewModel: DeleteButton) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className={TOOLTIP_APPOINTMENT_ITEM_DELETE_BUTTON} {...viewModel.restAttributes}>
    <Button icon="trash" stylingMode="text" />
  </div>

);

@ComponentBindings()
export class DeleteButtonProps extends ButtonProps {}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class DeleteButton extends JSXComponent<DeleteButtonProps> {}
