import {
  Component, ComponentBindings, JSXComponent, OneWay, Slot,
} from 'devextreme-generator/component_declaration/common';

export const viewFunction = (viewModel: Table): JSX.Element => (
  <table
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...viewModel.restAttributes}
    className={viewModel.props.className}
  >
    <tbody>
      {viewModel.props.children}
    </tbody>
  </table>
);

@ComponentBindings()
export class TableProps {
  @OneWay() className?: string;

  @Slot() children?: JSX.Element | JSX.Element[] | JSX.Element[][];
}

@Component({
  defaultOptionRules: null,
  view: viewFunction,
})
export class Table extends JSXComponent(TableProps) {
}
