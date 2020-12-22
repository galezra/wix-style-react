import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ dataHook, className, children, image, width, gutter }) => (
  <div
    data-hook={dataHook}
    className={className}
    style={{
      flex: '0 0 auto',
      width,
      marginLeft: gutter,
    }}
  >
    {image ? <img src={image.src} /> : children}
  </div>
);

Slide.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the slide element */
  className: PropTypes.string,

  /** Children to render inside the slide */
  children: PropTypes.node,

  /** Object containing the src for the slide image */
  image: PropTypes.object,

  /** Width of the slide */
  width: PropTypes.string,

  /** Width for spacing before the slide */
  gutter: PropTypes.string,
};

export default Slide;
