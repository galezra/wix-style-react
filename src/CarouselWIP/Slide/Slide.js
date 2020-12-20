import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({
  dataHook,
  basis = '100%',
  gutter = '',
  className = '',
  image,
  children,
  ...props
}) => (
  <div
    data-hook={dataHook}
    className={className}
    style={{
      flex: '0 0 auto',
      width: basis,
      marginLeft: gutter,
    }}
    {...props}
  >
    {image ? <img src={image} /> : children}
  </div>
);

Slide.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
};

export default Slide;
