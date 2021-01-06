import * as React from 'react';
import { InputProps } from '../../Input';
import { LanguageType } from '../../CalendarPanel';

import { OmitPolyfill } from '../../common';

export interface DateInputProps extends OmitPolyfill<InputProps, 'value'> {
  dataHook?: string;
  value?: object | string | number;
  locale?: LanguageType | { distanceInWords?: object; format?: object };
  dateFormat?: string | ((date: Date) => void);
  dateFormatV2?: string | ((date: Date) => void);
}

export default class DateInput extends React.PureComponent<DateInputProps> {}
