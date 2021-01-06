import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { selectorListUniDriverFactory } from '../SelectorList.uni.driver';
import SelectorList from '../index';

const dataHook = 'selector-list';

const selectorListUniTestkitFactory = uniTestkitFactoryCreator(
  selectorListUniDriverFactory,
);
const createDriver = () =>
  selectorListUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const isEven = number => number % 2 === 0;

const ITEMS = Array.from({ length: 50 }, (_, index) => {
  return {
    id: index,
    title: `Title ${index}`,
    subtitle: `Subtitle ${index}`,
    extraText: `Extra Text ${index}`,
    disabled: isEven(index),
    image: (
      <div style={{ width: '100%', height: '100%', background: '#bada55' }} />
    ),
  };
});

const Example = props => (
  <SelectorList
    dataHook={dataHook}
    height="540px"
    itemsPerPage={8}
    dataSource={() =>
      Promise.resolve({
        items: ITEMS,
        totalCount: ITEMS.length,
      })
    }
    {...props}
  />
);

const InteractiveExample = ({ componentDidMount, ...props }) => {
  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  return <Example {...props} />;
};

const interactiveTests = [
  {
    describe: 'select item',
    its: [
      {
        it: 'should select item',
        props: { multiple: true },
        componentDidMount: async () => {
          await createDriver().toggleSelectorAt(1);
        },
      },
      {
        it: 'should not select item when disabled',
        props: { multiple: true },
        componentDidMount: async () => {
          const DISABLED_INDEX = 0;
          await createDriver().toggleSelectorAt(DISABLED_INDEX);
        },
      },
    ],
  },
  {
    describe: 'sanity',
    its: [
      {
        it: 'should render selector list without search bar',
        props: { multiple: true, withSearch: false },
        componentDidMount: async () => {
          await createDriver().toggleSelectorAt(1);
        },
      },
    ],
  },
];

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`SelectorList${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <InteractiveExample {...props} componentDidMount={componentDidMount} />
      ),
    );
  });
});

storiesOf('SelectorList', module)
  .add('default', () => <Example />)
  .add('multiple', () => <Example multiple />);
