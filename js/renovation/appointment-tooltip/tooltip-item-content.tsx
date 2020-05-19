import {
  Component, ComponentBindings, JSXComponent, OneWay, Event,
} from 'devextreme-generator/component_declaration/common';
import noop from '../utils/noop';
import { WidgetProps } from '../widget';
import DeleteButton from './delete-button';
import {
  TOOLTIP_APPOINTMENT_ITEM, TOOLTIP_APPOINTMENT_ITEM_MARKER,
  TOOLTIP_APPOINTMENT_ITEM_MARKER_BODY, TOOLTIP_APPOINTMENT_ITEM_CONTENT,
  TOOLTIP_APPOINTMENT_ITEM_CONTENT_SUBJECT, TOOLTIP_APPOINTMENT_ITEM_CONTENT_DATE,
} from './consts';


export const viewFunction = ({
  restAttributes,
  data,
  currentData,
  onDeleteButtonClick,
}: TooltipItemContent) => (
  // Remove divs with dx-scheduler and dx-scheduler-overlay-panel
  <div className="dx-scheduler">
    <div className="dx-scheduler-overlay-panel">

      <div className={TOOLTIP_APPOINTMENT_ITEM} {...restAttributes}>
        <div className={TOOLTIP_APPOINTMENT_ITEM_MARKER}>
          <div className={TOOLTIP_APPOINTMENT_ITEM_MARKER_BODY} style={{ background: 'red' }} />
        </div>
        <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT}>
          <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT_SUBJECT}>{currentData.title}</div>
          <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT_DATE}>{currentData.date}</div>
        </div>
        <DeleteButton onClick={onDeleteButtonClick} />
      </div>
    </div>
  </div>
);

@ComponentBindings()
export class TooltipItemContentProps extends WidgetProps {
  @OneWay() item?: any = {};

  @OneWay() index?: number = 0;

  @OneWay() onDelete?: (data?: any, currentData?: any) => void = noop;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class TooltipItemContent extends JSXComponent<TooltipItemContentProps> {
  get currentData() {
    const { item } = this.props;
    return item.settings?.targetedAppointmentData || item.currentData || item.data;
  }

  get data() {
    return this.props.item.data;
  }

  get color() {
    return this.props.item.color;
  }

  get onDeleteButtonClick() {
    const { onDelete } = this.props;
    return (e: any): void => {
      console.log('delete click', e);
      e.event.canceled = true;
      e.event.stopPropagation();
      e.event.preventDefault();
      onDelete(this.data, this.currentData);
      return e.event;
    };
  }
}
