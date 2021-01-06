import * as React from 'react';

export interface CalendarProps {
  dataHook?: string;
  autoFocus?: boolean;
  numOfMonths?: 1 | 2;
  className?: string;
  onChange: Function;
  onClose?: Function;
  excludePastDates?: boolean;
  filterDate?: Function;
  value?:
    | string
    | Date
    | {
        from?: string | Date;
        to?: string | Date;
      };
  selectionMode?: 'day' | 'range';
  showYearDropdown?: boolean;
  showMonthDropdown?: boolean;
  shouldCloseOnSelect?: boolean;
  locale?: string | { distanceInWords?: {}; format?: {} };
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  rtl?: boolean;
}

export default class Calendar extends React.PureComponent<CalendarProps> {
  static areValuesEqual: (value1?: {}, value2?: {}) => boolean;
  static renderDay: (day: any, modifiers: any) => void;
  static optionalParse: (dateOrString: Date | string) => void;
  static parseValue: (value: any) => any;
  static isSingleDay: (value: any) => Date;
  static isRangeValue: (value: any) => boolean;
  static getUpdatedMonth: (
    nextPropsValue: any,
    numOfMonths: number,
    currentMonthDate: any,
  ) => any;
}
