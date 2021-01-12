import {
  Component,
  ComponentBindings,
  JSXComponent,
  JSXTemplate,
  OneWay,
  Template,
} from 'devextreme-generator/component_declaration/common';
import { VERTICAL_GROUP_ORIENTATION } from '../../../consts';
import { GroupOrientation } from '../../../types.d';
import {
  Group,
  ResourceCellTemplateProps,
} from '../../types.d';
import { isVerticalGroupOrientation } from '../../utils';
import { GroupPanelVerticalLayout } from './vertical/layout';

export const viewFunction = ({
  layout: Layout,
  props: {
    groups,
    groupByDate,
    height,
    cellTemplate,
  },
}: GroupPanel): JSX.Element => (
  <Layout
    groups={groups}
    height={height}
    cellTemplate={cellTemplate}
    groupByDate={groupByDate}
  />
);

@ComponentBindings()
export class GroupPanelProps {
  @OneWay() groups: Group[] = [];

  @OneWay() groupOrientation: GroupOrientation = VERTICAL_GROUP_ORIENTATION;

  @OneWay() groupByDate = false;

  @OneWay() height?: number;

  @Template() cellTemplate?: JSXTemplate<ResourceCellTemplateProps>;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
  jQuery: { register: true },
})
export class GroupPanel extends JSXComponent(GroupPanelProps) {
  get layout(): any {
    const { groupOrientation } = this.props;
    // console.log('render');

    return isVerticalGroupOrientation(groupOrientation)
      ? GroupPanelVerticalLayout
      : GroupPanelVerticalLayout; // TODO: horizontal layout
  }
}
