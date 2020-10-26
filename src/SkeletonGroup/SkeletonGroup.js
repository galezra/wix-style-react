import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Button from '../Button';
import { st, classes } from './SkeletonGroup.st.css';
import { dataHooks } from './constants';
import { SkeletonGroupContext } from './SkeletonGroupAPI';

/** SkeletonGroup */
class SkeletonGroup extends React.PureComponent {
  render() {
    const { dataHook, className, skin, children } = this.props;
    return (
      <SkeletonGroupContext.Provider value={{ skin }}>
        {children}
      </SkeletonGroupContext.Provider>
    );
  }
}

SkeletonGroup.displayName = 'SkeletonGroup';

SkeletonGroup.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Effects the color of the Skeleton */
  skin: PropTypes.oneOf(['dark', 'light']),
};

SkeletonGroup.defaultProps = { skin: 'dark' };

export default SkeletonGroup;
