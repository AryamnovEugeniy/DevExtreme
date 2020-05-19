import {
  Component, ComponentBindings, JSXComponent, OneWay,
} from 'devextreme-generator/component_declaration/common';
import { WidgetProps } from '../widget';
import List from '../list';
import TooltipItemContent from './tooltip-item-content';

export const viewFunction = ({
  props: { appointmentData },
}: AppointmentList) => (
  <List
    itemTemplate={TooltipItemContent}
    dataSource={appointmentData}
  />
);

@ComponentBindings()
export class AppointmentListProps extends WidgetProps {
  @OneWay() appointmentData?: any;
}

@Component({
  defaultOptionRules: null,
  jQuery: { register: true },
  view: viewFunction,
})
export default class AppointmentList extends JSXComponent<AppointmentListProps> {}
