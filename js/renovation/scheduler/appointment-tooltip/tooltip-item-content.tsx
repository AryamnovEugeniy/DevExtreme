import {
  Component, ComponentBindings, JSXComponent, OneWay, Template, Ref, Fragment, Effect,
} from 'devextreme-generator/component_declaration/common';
import noop from '../../utils/noop';
import { WidgetProps } from '../../widget';
import DeleteButton from './delete-button';
import {
  TOOLTIP_APPOINTMENT_ITEM, TOOLTIP_APPOINTMENT_ITEM_CONTENT,
  TOOLTIP_APPOINTMENT_ITEM_CONTENT_SUBJECT, TOOLTIP_APPOINTMENT_ITEM_CONTENT_DATE,
} from './consts';
import Marker from './marker';


export const viewFunction = (viewModel: TooltipItemContent) => {
  const useTemplate = !!viewModel.props.itemContent;
  const { formattedData: { text, formatDate } } = viewModel;
  return (
    <Fragment>
      {useTemplate && (
      <viewModel.props.itemContent
        model={{
          appointmentData: viewModel.data,
          appointmentTargetedData: viewModel.currentData,
        }}
        index={viewModel.props.index}
        parentRef={{
          current: viewModel.props.container,
        }}
      />
      )}
      {!useTemplate && (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div className={TOOLTIP_APPOINTMENT_ITEM} {...viewModel.restAttributes}>
        <Marker color={viewModel.color} />
        <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT}>
          <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT_SUBJECT}>{text}</div>
          <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT_DATE}>{formatDate}</div>
        </div>
        {viewModel.props.showDeleteButton && (
          <DeleteButton onClick={viewModel.onDeleteButtonClick} />
        )}
      </div>
      )}
    </Fragment>
  );
};

@ComponentBindings()
export class TooltipItemContentProps extends WidgetProps {
  @OneWay() item?: any = {};

  @OneWay() index?: number = 0;

  @OneWay() container?: HTMLDivElement;

  @Template() itemContent?: any;

  @OneWay() onDelete?: (data?: any, currentData?: any) => void = noop;

  @OneWay() onHide?: () => void = noop;

  @OneWay() getTextAndFormatDate?: (data?: any, currentData?: any) => any = noop;

  @OneWay() showDeleteButton?: boolean = true;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
  jQuery: {
    register: true,
  },
})
export default class TooltipItemContent extends JSXComponent<TooltipItemContentProps> {
  @Ref()
  contentRef!: HTMLDivElement;

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
    const { onDelete, onHide } = this.props;
    return (e: any): void => {
      onHide!();
      e.event.stopPropagation();
      onDelete!(this.data, this.currentData);
    };
  }

  get formattedData() {
    const { getTextAndFormatDate } = this.props;
    return getTextAndFormatDate!(this.data, this.currentData);
  }

  @Effect()
  someEffect() {
    console.log('Some effect');
  }
}
