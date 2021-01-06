import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { addDays } from 'date-fns';

import Calendar from '..';

import { storySettings } from './storySettings';

import allComponents from '../../../stories/utils/allComponents';

import { ExampleYearMonths, ExampleStandard } from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Calendar,
  componentPath: '..',

  componentProps: setState => ({
    onChange: value => setState({ value }),
    showYearDropdown: false,
    showMonthDropdown: false,
    shouldCloseOnSelect: true,
    excludePastDates: false,
    selectionMode: 'day',
    autoFocus: true,
    numOfMonths: 1,
  }),

  exampleProps: {
    value: [
      {
        label: `1st of Today's month`,
        value: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      },
      {
        label: `Today`,
        value: new Date(),
      },
      {
        label: `Next Week (Range)`,
        value: { from: new Date(), to: addDays(new Date(), 6) },
      },
      {
        label: `Last Week (Range)`,
        value: { from: addDays(new Date(), -6), to: new Date() },
      },
    ],
    locale: [
      'en',
      'es',
      'pt',
      'fr',
      'de',
      'pl',
      'it',
      'ru',
      'ja',
      'ko',
      'tr',
      'sv',
      'no',
      'nl',
      'da',
      'zh',
      'th',
      'cs',
      'uk',
    ],
    firstDayOfWeek: [
      {
        label: `0`,
        value: 0,
      },
      {
        label: `1`,
        value: 1,
      },
      {
        label: `2`,
        value: 2,
      },
      {
        label: `3`,
        value: 3,
      },
      {
        label: `4`,
        value: 4,
      },
      {
        label: `5`,
        value: 5,
      },
      {
        label: `6`,
        value: 6,
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Calendar.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'A single/double calendar panel, displayed in monthly view.',
          }),

          importExample("import { Calendar } from 'wix-style-react'"),

          divider(),

          title('Examples'),

          example({
            title: 'Standard',
            source: ExampleStandard,
          }),

          example({
            title: 'With Years and Months selection',
            source: ExampleYearMonths,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
