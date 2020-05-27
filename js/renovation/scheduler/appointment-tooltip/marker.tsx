import {
  Component, ComponentBindings, JSXComponent, Effect, OneWay,
} from 'devextreme-generator/component_declaration/common';
import {
  TOOLTIP_APPOINTMENT_ITEM_MARKER, TOOLTIP_APPOINTMENT_ITEM_MARKER_BODY,
} from './consts';

export const viewFunction = (viewModel: Marker) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <div className={TOOLTIP_APPOINTMENT_ITEM_MARKER}>
    <div
      className={TOOLTIP_APPOINTMENT_ITEM_MARKER_BODY}
      style={{ background: viewModel.appointmentColor }}
    />
  </div>

);

@ComponentBindings()
export class MarkerProps {
  @OneWay() color?: any;
}

type Color = string;

@Component({
  defaultOptionRules: null,
  view: viewFunction,
  jQuery: {
    register: true,
  },
})
export default class Marker extends JSXComponent<MarkerProps> {
  appointmentColor!: Color;

  @Effect()
  colorEffect() {
    console.log('color effect!');
    const { color } = this.props;
    color?.done((value) => {
      this.appointmentColor = value;
    });
  }
}
