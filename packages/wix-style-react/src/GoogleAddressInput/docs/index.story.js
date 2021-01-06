import React from 'react';
import {
  header,
  title,
  divider,
  tabs,
  tab,
  api,
  example as baseExample,
  importExample,
  playground,
  testkit,
} from 'wix-storybook-utils/Sections';
import { storySettings } from './storySettings';
import GoogleAddressInput from '..';
import allComponents from '../../../stories/utils/allComponents';

import clients from '../../clients';
import GoogleAPILoader from '../../../stories/utils/GoogleAPILoader';

const example = config =>
  baseExample({ components: { ...allComponents, GoogleAPILoader }, ...config });

const basicExample = `
() => {
  const [value, setValue] = React.useState();
  return (
    <GoogleAPILoader>
      <GoogleAddressInput
        value={value}
        onChange={e => setValue(e.target.value)}
        onSet={e => setValue(e.originValue)}
        Client={clients.GoogleMapsClient}
     />
    </GoogleAPILoader>
    );
}
`;

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: GoogleAddressInput,
  componentPath: '..',

  componentWrapper: ({ component }) => (
    <GoogleAPILoader>{component}</GoogleAPILoader>
  ),
  componentProps: setProps => ({
    Client: clients.GoogleMapsClient,
    value: '',
    onChange: e => setProps({ value: e.target.value }),
    onSet: e => setProps({ value: e.originValue }),
    placeholder: 'Enter Address...',
  }),

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample(`
import { GoogleAddressInput, clients } from 'wix-style-react';
const client = clients.GoogleMapsClient;
            `),

          divider(),

          title('Examples'),

          example({
            title: 'Basic usage',
            source: basicExample,
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
