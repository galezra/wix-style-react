import React from 'react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import SingleAreaGridReadme from './SingleAreaGridReadme.md';
import SingleAreaGrid from './SingleAreaGrid';
import SingleAreaGridRaw from '!raw-loader!./SingleAreaGrid';
import SingleAreaGridScssRaw from '!raw-loader!./SingleAreaGrid.scss';
import styles from './SingleAreaGrid.scss';

const SingleAreaGridRawCombined = `
${SingleAreaGridRaw}

//IntroductionExample.scss
${SingleAreaGridScssRaw}
`;

export default () => (
  <div>
    <Markdown source={SingleAreaGridReadme} />

    <CodeExample
      title="SortableGrid with fixed element"
      code={SingleAreaGridRawCombined}
    >
      <SingleAreaGrid
        startFixedElement={<div className={styles.item}>fixed elem</div>}
      />
    </CodeExample>
  </div>
);
