import {
  Component, ComponentBindings, JSXComponent, OneWay,
} from 'devextreme-generator/component_declaration/common';
import { WidgetProps } from '../widget';
import Button from '../button';

const TOOLTIP_APPOINTMENT_ITEM = 'dx-tooltip-appointment-item';
const TOOLTIP_APPOINTMENT_ITEM_DELETE_BUTTON = `${TOOLTIP_APPOINTMENT_ITEM}-delete-button`;

export const viewFunction = (viewModel: DeleteButton) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className={TOOLTIP_APPOINTMENT_ITEM_DELETE_BUTTON} {...viewModel.restAttributes}>
    <Button icon="trash" stylingMode="text" />
  </div>

);

@ComponentBindings()
export class DeleteButtonProps extends WidgetProps {
  @OneWay() currentData?: any;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class DeleteButton extends JSXComponent<DeleteButtonProps> {}
