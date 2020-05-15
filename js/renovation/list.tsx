
import ReactDOM from 'react-dom';
import {
  Component, ComponentBindings, JSXComponent, OneWay, Ref, Effect, Event,
} from 'devextreme-generator/component_declaration/common';
import DataSource, { DataSourceOptions } from '../data/data_source';
import { WidgetProps } from './widget';
import DxList from '../ui/list/ui.list.edit';

export const viewFunction = (viewModel: List) => (
  <div ref={viewModel.widgetRef as any} />
);
@ComponentBindings()
export class ListProps extends WidgetProps {
  @OneWay() dataSource?: string | Array<string | any> | DataSource | DataSourceOptions;

  @OneWay() itemTemplate?: any;

  @Event() onItemClick?: (e: any) => any = (() => {});
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class List extends JSXComponent<ListProps> {
  @Ref()
  widgetRef!: HTMLDivElement;

  @Ref()
  contentRef!: HTMLDivElement;

  @Effect()
  setupWidget() {
    const reactContent = React.createElement(this.props.itemTemplate, [], []);
    const renderTemplate = {
      render: ({ container }) => ReactDOM.render(
        reactContent, container,
      ),
    };

    // eslint-disable-next-line no-new
    new DxList(this.widgetRef, {
      ...this.props as any,
      itemTemplate: renderTemplate,
    });
  }
}
