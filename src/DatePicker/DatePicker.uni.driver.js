import {baseUniDriverFactory, findByHook} from '../../test/utils/unidriver';
import {calendarUniDriverFactory} from '../Calendar/Calendar.uni.driver.js';
import {testkit as inputUniDriverFactory} from '../Input/Input.uni.driver.js';
import {dataHooks} from './constants';

export const datePickerUniDriverFactory = (base, body) => {
  const calendarDriver = calendarUniDriverFactory(
    findByHook(base, dataHooks.datePickerCalendar),
    body,
  );
  const inputDriver = inputUniDriverFactory(
    findByHook(base, dataHooks.datePickerInputContainer),
    body,
  );

  const driver = {
    exists: () => baseUniDriverFactory(base).exists(),
    open: async () => await inputDriver.focus(),
    getWidth: () => base._prop('style').then((style) => style.width),
  };

  return {
    inputDriver,
    calendarDriver,
    exists: driver.exists,
    driver
  }
};

