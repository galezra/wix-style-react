import React from 'react';
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

import * as examples from './examples';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import AtlasAddressInput from '..';
import { SectionHelper } from '../..';

// We've set up a mock Atlas api in Storybook middleware file
const BASE_URL = '/api/atlas/';
const MockAtlasAddressInput = props => (
  <AtlasAddressInput baseUrl={BASE_URL} {...props} />
);

const example = config =>
  baseExample({
    components: {
      ...allComponents,
      AtlasAddressInput: MockAtlasAddressInput,
    },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AtlasAddressInput,
  componentPath: '..',

  componentProps: {
    clearButton: true,
    roundInput: true,
    disabled: false,
    size: 'medium',
    placeholder: 'Placeholder text...',
    noResultsText: 'No results...',
  },

  exampleProps: {
    size: ['small', 'medium', 'large'],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AtlasAddressInput.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'An address search component, requires an address provider.',
          }),

          description({
            text: (
              <SectionHelper title="Internal component">
                This is an internal Wix component which cannot be used outside
                of Wix projects.
              </SectionHelper>
            ),
          }),

          importExample(
            "import AtlasAddressInput from 'wix-style-react/AtlasAddressInput';",
          ),

          divider(),

          description({
            text: (
              <SectionHelper title="Dependencies" fullWidth>
                <p>
                  To use this component please install:
                  <ul style={{ position: 'relative' }}>
                    <li>@wix/ambassador</li>
                    <li>@wix/ambassador-wix-atlas-service-web</li>
                  </ul>
                </p>
                <p>
                  <h5>Using NPM:</h5>
                  <code>
                    npm install @wix/ambassador
                    @wix/ambassador-wix-atlas-service-web
                  </code>
                </p>
                <p>
                  <h5>Using Yarn:</h5>
                  <code>
                    yard add @wix/ambassador
                    @wix/ambassador-wix-atlas-service-web
                  </code>
                </p>
              </SectionHelper>
            ),
          }),

          description({
            title: 'Authorization',
            text: `Requests to Atlas must be authorized using an authorization header.\n
Check out this [Wix Doc](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/authenticating-as-api-client#platformization-guidelines_authenticating-as-api-client_authenticating-from-a-browser---site-requests) on how to retreive a signed instance in your environment.\n
You can pass a headers object to \`AtlasAddressInput\` using the \`headers\` prop.`,
          }),

          divider(),

          title('Examples'),

          example({
            title: 'Basic usage',
            text: `
Atlas address input provides UI and the Atlas service internally.\n
This is a mock example, type anything to see suggestions that match your input.
            `,
            source: examples.simple,
          }),

          example({
            title: 'Display custom address',
            text: `
In order to custom the address displayed, the \`onSelect\` callback provides a \`getPlaceDetails\` function to get all meta-data from Atlas.\n
In this example we want to display a postal code along with the address, try to type anything and select any suggestion.
            `,
            source: examples.controlled,
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
