import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../../IconButton/IconButton';

const skinPriorityMap = {
  standard: 'secondary',
  inverted: 'primary',
  light: 'primary',
  transparent: 'primary',
  premium: 'primary',
};

const Control = ({
  dataHook,
  arrowSize,
  controlsSkin,
  icon,
  className,
  disabled = false,
  ...remainingProps
}) => (
  <div {...remainingProps} data-hook={dataHook} className={className}>
    <IconButton
      skin={controlsSkin}
      size={arrowSize}
      disabled={disabled}
      priority={skinPriorityMap[controlsSkin]}
    >
      {icon}
    </IconButton>
  </div>
);

Control.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Icon to be rendered within the icon button */
  icon: PropTypes.element.isRequired,
};

export default Control;
