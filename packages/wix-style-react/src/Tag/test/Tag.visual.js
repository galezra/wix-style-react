import React from 'react';
import Tag from '../Tag';
import Box from '../../Box';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const Story = props => <Tag {...props}>This is a very beautiful tag!</Tag>;

const options = {
  props: [
    'size',
    'disabled',
    'removable',
    { name: 'maxWidth', values: [undefined, 150] },
    {
      name: 'thumb',
      values: [
        undefined,
        <div
          style={{
            backgroundColor: 'green',
            height: '100%',
            width: '100%',
          }}
        />,
      ],
    },
  ],
  skipUndefinedValue: true,
};

storyOfAllPermutations(Story, Tag, options);

const ThemeStory = props => (
  <Box direction={'vertical'}>
    {['tiny', 'small', 'medium', 'large'].map(size => (
      <Box margin={1} width="330px">
        <Tag {...props} size={size}>
          Tag
        </Tag>
      </Box>
    ))}
  </Box>
);

const themeOptions = {
  props: ['theme'],
  skipUndefinedValue: true,
  storyName: 'Themes',
};

storyOfAllPermutations(ThemeStory, Tag, themeOptions);
