import deepEqual from 'lodash.isequal';
import React from 'react';

import Select from './Select';
import {
  PDynamicSelect,
  SDynamicSelect,
  SelectInputRef,
  SelectOption,
} from './types';

class DynamicSelect extends React.Component<PDynamicSelect, SDynamicSelect> {
  static defaultProps = {
    filters: {},
    all: true,
    allValue: 'all',
  } as PDynamicSelect;

  private __ref = React.createRef<SelectInputRef>();

  constructor(props: PDynamicSelect) {
    super(props);
    this.state = {
      options: [],
    };
  }

  getOptions = () => {
    const {
      name,
      value,
      data,
      valueColumn,
      all,
      allValue,
      onChange,
    } = this.props;
    const filters = this.props.filters!;
    const labelColumn = this.props.labelColumn || valueColumn;
    const keys = Object.keys(filters);

    // get filted data.
    const dataFilted = data.filter(d => {
      return keys.every(key => {
        if (filters[key] === allValue) {
          return true;
        }
        return d[key] === filters[key];
      });
    });

    // generate options.
    let optionValues = [];
    let options: Array<SelectOption> = [];
    dataFilted.forEach(d => {
      if (!optionValues.includes(d[valueColumn])) {
        optionValues.push(d[valueColumn]);
        options.push({ value: d[valueColumn], label: d[labelColumn] });
      }
    });

    // manually dispatch change event if previous value is not in new options.
    if (!optionValues.includes(value)) {
      const newValue = optionValues[0] as string | number;

      // onChange!(
      //   {
      //     target: {
      //       name,
      //       value: newValue,
      //     },
      //   },
      //   null,
      // );
    }

    // sorting, keep options' order consistent.
    options.sort((a, b) => {
      if (all && a.value === allValue) {
        return -1;
      } else if (a.value < b.value) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({ options });
  };

  componentDidMount = () => {
    this.getOptions();
  };

  componentDidUpdate = (prevProps: PDynamicSelect) => {
    const prev = { data: prevProps.data, filters: prevProps.filters };
    const next = { data: this.props.data, filters: this.props.filters };
    if (!deepEqual(next, prev)) {
      this.getOptions();
    }
  };

  render = () => {
    const {
      data,
      filters,
      valueColumn,
      labelColumn,
      ...SelectProps
    } = this.props;
    const { options } = this.state;
    return (
      <Select
        ref={this.__ref}
        {...SelectProps}
        options={options}
        multiple={false}
      />
    );
  };
}

export default DynamicSelect;
