import React from 'react';
import PropTypes from 'prop-types';

/** Animate Component */
const getDelayValue = delay => {
  switch (typeof delay) {
    case 'string':
      return delay;
    case 'number':
      return `${delay}ms`;
    default:
      return undefined;
  }
};

const Animate = React.forwardRef(
  ({ dataHook, className, delay, onStart, onEnd, children }, ref) => (
    <div
      data-hook={dataHook}
      className={className}
      style={{ animationDelay: getDelayValue(delay) }}
      onAnimationStart={onStart}
      onAnimationEnd={onEnd}
      ref={ref}
    >
      {children && React.Children.only(children)}
    </div>
  ),
);

Animate.propTypes = {
  /** Classes to be applied to the root element. */
  className: PropTypes.string,

  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Any node to render to animate. */
  children: PropTypes.node.isRequired,

  /** A callback fired immediately after the transition starts.*/
  onStart: PropTypes.func,

  /** A callback fired immediately after the transition ended.*/
  onEnd: PropTypes.func,

  /** set a delay before the animation execution. When provided a number- sets this as `ms`.*/
  delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Animate.displayName = 'Animate';

Animate.defaultProps = {};

export default Animate;
