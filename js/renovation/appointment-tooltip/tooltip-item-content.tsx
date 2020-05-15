import {
  Component, ComponentBindings, JSXComponent, OneWay,
} from 'devextreme-generator/component_declaration/common';
import { WidgetProps } from '../widget';
import DeleteButton from './delete-button';
import {
  TOOLTIP_APPOINTMENT_ITEM, TOOLTIP_APPOINTMENT_ITEM_MARKER,
  TOOLTIP_APPOINTMENT_ITEM_MARKER_BODY, TOOLTIP_APPOINTMENT_ITEM_CONTENT,
  TOOLTIP_APPOINTMENT_ITEM_CONTENT_SUBJECT, TOOLTIP_APPOINTMENT_ITEM_CONTENT_DATE,
} from './consts';


export const viewFunction = (viewModel: TooltipItemContentProps) => (
  // Remove divs with dx-scheduler and dx-scheduler-overlay-panel
  <div className="dx-scheduler">
    <div className="dx-scheduler-overlay-panel">

      <div className={TOOLTIP_APPOINTMENT_ITEM} {...viewModel.restAttributes}>
        <div className={TOOLTIP_APPOINTMENT_ITEM_MARKER}>
          <div className={TOOLTIP_APPOINTMENT_ITEM_MARKER_BODY} style={{ background: 'red' }} />
        </div>
        <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT}>
          <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT_SUBJECT}>Fake title</div>
          <div className={TOOLTIP_APPOINTMENT_ITEM_CONTENT_DATE}>{(new Date()).toString()}</div>
        </div>
        <DeleteButton />
      </div>
    </div>
  </div>
);

@ComponentBindings()
export class TooltipItemContentProps extends WidgetProps {
  @OneWay() currentData?: any;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class TooltipItemContent extends JSXComponent<TooltipItemContentProps> {}
