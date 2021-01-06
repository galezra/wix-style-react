import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './DatePickerDropdown.st.css';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';
import DropdownBase from '../../DropdownBase';
import TextButton from '../../TextButton';
import Box from '../../Box';

export default class DropdownPicker extends React.Component {
  static propTypes = {
    dataHook: PropTypes.string,
    className: PropTypes.string,
    caption: PropTypes.node,
    options: PropTypes.array,
    onChange: PropTypes.func,
    selectedId: PropTypes.number,
  };

  onSelect = data => {
    const { onChange } = this.props;

    if (typeof onChange === 'function') onChange(data);
  };

  render() {
    const { className, caption, options, dataHook, selectedId } = this.props;

    return (
      <Box className={st(classes.root, className)} padding="0 6px">
        <DropdownBase
          data-hook={dataHook}
          className={classes.dropdown}
          options={options}
          dynamicWidth
          minWidth={120}
          selectedId={selectedId}
          onSelect={this.onSelect}
          focusOnSelectedOption
        >
          {({ toggle }) => {
            return (
              <TextButton
                className={classes.caption}
                skin="dark"
                size="small"
                suffixIcon={<ChevronDown />}
                onClick={toggle}
                dataHook={`${dataHook}-button`}
              >
                {caption}
              </TextButton>
            );
          }}
        </DropdownBase>
      </Box>
    );
  }
}
