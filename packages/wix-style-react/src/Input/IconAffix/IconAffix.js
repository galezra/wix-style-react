import React from 'react';
import PropTypes from 'prop-types';
import InputConsumer from '../InputConsumer';
import { st, classes } from './IconAffix.st.css';

const IconAffix = ({ children, dataHook }) => (
  <InputConsumer consumerCompName={IconAffix.displayName}>
    {({ size, inPrefix, inSuffix, roundInput, disabled, onInputClicked }) => (
      <div
        className={st(classes.root, {
          size,
          inPrefix,
          inSuffix,
          roundInput,
          disabled,
        })}
        onClick={!disabled ? onInputClicked : undefined}
        data-hook={dataHook}
      >
        {React.cloneElement(children, {
          size: size === 'small' ? '18px' : '24px',
        })}
      </div>
    )}
  </InputConsumer>
);

IconAffix.displayName = 'Input.IconAffix';
IconAffix.propTypes = {
  children: PropTypes.element.isRequired,
  dataHook: PropTypes.string,
};

export default IconAffix;
