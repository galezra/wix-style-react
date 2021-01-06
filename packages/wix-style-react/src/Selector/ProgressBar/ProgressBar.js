import React from 'react';
import PropTypes from 'prop-types';
import s from './ProgressBar.scss';
import Heading from '../../Heading';

class ProgressBar extends React.PureComponent {
  render() {
    const { dataHook, progress } = this.props;
    return (
      <div data-hook={dataHook} className={s['progress-bar']}>
        <Heading appearance="H6">{`${progress}%`}</Heading>
        <span className={s.bar}>
          <span className={s['bar-value']} style={{ width: progress + '%' }} />
          <span
            className={s['bar-leftover']}
            style={{ width: 100 - progress + '%' }}
          />
        </span>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** Percentage of the progress, value should be between 0 to 100 */
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
