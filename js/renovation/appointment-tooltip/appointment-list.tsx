import {
  Component, ComponentBindings, JSXComponent, OneWay,
} from 'devextreme-generator/component_declaration/common';
import noop from '../utils/noop';
import { WidgetProps } from '../widget';
import List from '../list';
import TooltipItemContent from './tooltip-item-content';

const trueValue = true;

const getItemComponent = (onDelete) => ({ item, index }) => (
  <TooltipItemContent
    item={item}
    index={index}
    onDelete={onDelete}
  />
);

export const viewFunction = ({
  restAttributes,
  onItemClick,
  props: {
    appointmentData,
    checkAndDeleteAppointment,
  },
}: AppointmentList) => (
  <List
    itemTemplate={({ item, index }) => (
      <TooltipItemContent
        item={item}
        index={index}
        onDelete={checkAndDeleteAppointment}
      />
    )}
    dataSource={appointmentData}
    focusStateEnabled={trueValue}
    onItemClick={onItemClick}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...restAttributes}
  />
);

@ComponentBindings()
export class AppointmentListProps extends WidgetProps {
  @OneWay() appointmentData?: any;

  @OneWay() checkAndDeleteAppointment?: (data?: any, currentData?: any) => void = noop;

  @OneWay() showAppointmentPopup?: (data: any, visibleButtons: boolean, currentData: any) => void = noop;
}

@Component({
  defaultOptionRules: null,
  jQuery: { register: true },
  view: viewFunction,
})
export default class AppointmentList extends JSXComponent<AppointmentListProps> {
  get onItemClick() {
    return (e) => {
      const { data, currentData } = e.itemData;
      const { showAppointmentPopup } = this.props;
      showAppointmentPopup!(data, false, currentData);
    };
  }
}
