import React from 'react';
import PropTypes from 'prop-types';

import ChevronLeftLarge from 'wix-ui-icons-common/ChevronLeftLarge';
import ChevronRightLarge from 'wix-ui-icons-common/ChevronRightLarge';

import YearDropdown from './YearDropdown';
import MonthDropdown from './MonthDropdown';
import { st, classes } from './DatePickerHead.st.css';
import Text from '../../Text';

const getMonthName = (months, month) => months[month] || months[0];

const DatePickerHead = ({
  className,
  date,
  localeUtils,
  onChange,
  onLeftArrowClick,
  onRightArrowClick,
  showMonthDropdown,
  showYearDropdown,
}) => {
  return (
    <div data-hook="datepicker-head" className={st(classes.root, className)}>
      <div
        className={st(classes.arrow, classes.arrowLeft)}
        data-hook="datepicker-left-arrow"
        onClick={onLeftArrowClick}
      >
        <ChevronLeftLarge className={classes.arrowIcon} />
      </div>

      {showMonthDropdown ? (
        <MonthDropdown
          className={classes.monthDropdown}
          date={date}
          onChange={onChange}
          months={localeUtils.getMonths()}
        />
      ) : (
        <Text
          className={classes.caption}
          weight="normal"
          dataHook={'datepicker-month-caption'}
        >
          {getMonthName(localeUtils.getMonths(), date.getMonth())}
        </Text>
      )}

      {showYearDropdown ? (
        <YearDropdown
          className={classes.yearDropdown}
          date={date}
          onChange={onChange}
        />
      ) : (
        <Text
          className={classes.caption}
          weight="normal"
          dataHook={'datepicker-year-caption'}
        >
          {date.getFullYear()}
        </Text>
      )}

      <div
        className={st(classes.arrow, classes.arrowRight)}
        data-hook="datepicker-right-arrow"
        onClick={onRightArrowClick}
      >
        <ChevronRightLarge className={classes.arrowIcon} />
      </div>
    </div>
  );
};

DatePickerHead.propTypes = {
  date: PropTypes.object.isRequired,
  localeUtils: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLeftArrowClick: PropTypes.func.isRequired,
  onRightArrowClick: PropTypes.func.isRequired,
  showMonthDropdown: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
};

export default DatePickerHead;
