import {
  Component, ComponentBindings, JSXComponent, OneWay, Template,
} from 'devextreme-generator/component_declaration/common';
import Row from '../row';
import { ViewCellData } from '../../types';

export const viewFunction = (viewModel: HeaderPanelLayout) => (
  <table
    className="dx-scheduler-header-panel"
      // eslint-disable-next-line react/jsx-props-no-spreading
    {...viewModel.restAttributes}
  >
    <tbody>
      <Row>
        {viewModel.props.viewCellsData![0].map(({ startDate, endDate, today }) => (
          <viewModel.props.cellTemplate
            startDate={startDate}
            endDate={endDate}
            today={today}
            key={startDate.toString()}
          />
        ))}
      </Row>
    </tbody>
  </table>
);

@ComponentBindings()
export class HeaderPanelLayoutProps {
  @OneWay() viewCellsData?: ViewCellData[][] = [[]];

  @Template() cellTemplate?: any;
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export default class HeaderPanelLayout extends JSXComponent(HeaderPanelLayoutProps) {}
