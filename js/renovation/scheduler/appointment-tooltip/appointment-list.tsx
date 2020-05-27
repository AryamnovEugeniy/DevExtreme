import {
  Component, ComponentBindings, JSXComponent, OneWay, Template,
} from 'devextreme-generator/component_declaration/common';
import noop from '../../utils/noop';
import { WidgetProps } from '../../widget';
import List from '../../list';
import TooltipItemContent from './tooltip-item-content';

const trueValue = true;

const getItemComponent = (onDelete) => ({ item, index }) => (
  <TooltipItemContent
    item={item}
    index={index}
    onDelete={onDelete}
  />
);

export const viewFunction = (viewModel: AppointmentList) => (
  <List
    itemTemplate={({ item, index, container }) => (
      <TooltipItemContent
        item={item}
        index={index}
        onDelete={viewModel.props.checkAndDeleteAppointment}
        onHide={viewModel.props.onHide}
        itemContent={viewModel.props.itemContent}
        container={container}
        getTextAndFormatDate={viewModel.props.getTextAndFormatDate}
      />
    )}
    dataSource={viewModel.props.appointmentData}
    focusStateEnabled={trueValue}
    onItemClick={viewModel.onItemClick}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...viewModel.restAttributes}
  />
);

@ComponentBindings()
export class AppointmentListProps extends WidgetProps {
  @OneWay() appointmentData?: any;

  @OneWay() listRef?: any;

  @OneWay() checkAndDeleteAppointment?: (data: any, currentData: any) => void = noop;

  @OneWay() showAppointmentPopup?: (data: any, visibleButtons: boolean, currentData: any) => void = noop;

  @Template() itemContent?: any;

  @OneWay() onHide?: () => void = noop;

  @OneWay() getTextAndFormatDate?: (data?: any, currentData?: any) => any = noop;
}

@Component({
  defaultOptionRules: null,
  jQuery: { register: true },
  view: viewFunction,
})
export default class AppointmentList extends JSXComponent<AppointmentListProps> {
  height: string | number = 'auto';

  get onItemClick() {
    return (e) => {
      const { data, currentData } = e.itemData;
      const { showAppointmentPopup } = this.props;
      showAppointmentPopup!(data, false, currentData);
    };
  }
}
