import React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import NestableListReadme from './NestableListReadme.md';
import NestableListExample from './NestableListExample';
import NestableListRaw from '!raw-loader!./NestableListExample';
import NestableListScssRaw from '!raw-loader!./NestableList.scss';

const NestableListRawCombined = `
${NestableListRaw}

//IntroductionExample.scss
${NestableListScssRaw}
`;

export default () => (
  <div>
    <Markdown source={NestableListReadme} />
    <CodeExample
      title="NestableList with handle"
      code={NestableListRawCombined}
    >
      <NestableListExample />
    </CodeExample>
  </div>
);
