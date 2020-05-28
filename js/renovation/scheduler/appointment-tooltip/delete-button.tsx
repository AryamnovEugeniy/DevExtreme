import {
  Component, ComponentBindings, JSXComponent, Event,
} from 'devextreme-generator/component_declaration/common';
import Button from '../../button';
import {
  TOOLTIP_APPOINTMENT_ITEM_DELETE_BUTTON,
} from './consts';

export const viewFunction = (viewModel: DeleteButton) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className={TOOLTIP_APPOINTMENT_ITEM_DELETE_BUTTON} {...viewModel.restAttributes}>
    <Button icon="trash" stylingMode="text" onClick={viewModel.props.onClick} />
  </div>
);

@ComponentBindings()
export class DeleteButtonProps {
  @Event() onClick?: (e: any) => void;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
  jQuery: {
    register: true,
  },
})
export default class DeleteButton extends JSXComponent<DeleteButtonProps> {}
