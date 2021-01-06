import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { RadioButton } from 'wix-ui-core/dist/src/components/radio-button';
import Text from '../Text';

import { st, classes } from './Radio.st.css';

const Radio = ({
  dataHook,
  checked,
  disabled,
  label,
  id,
  name,
  onChange,
  alignItems,
  className,
}) => {
  const renderLabel = useMemo(() => {
    return (
      <Text tagName="div" size="medium" weight="thin" secondary>
        {label}
      </Text>
    );
  }, [label]);

  return (
    <RadioButton
      className={st(classes.root, { alignItems }, className)}
      data-hook={dataHook}
      checked={checked}
      label={renderLabel}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={name}
    />
  );
};

Radio.displayName = 'Radio';

Radio.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Defines if radio is checked */
  checked: PropTypes.bool,

  /** Applies disabled styles and prevents radio from being checked */
  disabled: PropTypes.bool,

  /** The label displayed with radio */
  label: PropTypes.node,

  /** Unique name of radio */
  name: PropTypes.node,

  /** Unique id of radio */
  id: PropTypes.string,

  /** A callback when radio is selected */
  onChange: PropTypes.func,

  /** Radio alignment with label. Default is center */
  alignItems: PropTypes.oneOf(['top', 'center']),
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  alignItems: 'center',
};

export default Radio;
