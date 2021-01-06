import React, { useEffect } from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import Carousel from '..';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { carouselUniDriverFactory } from '../Carousel.uni.driver';
import { storySettings } from './storySettings';
import eventually from 'wix-eventually';
import { Layout, Cell } from '../../Layout';

const commonProps = {
  infinite: false,
  images: [
    {
      src:
        'https://image.shutterstock.com/image-photo/red-foxes-lie-on-grass-260nw-681246823.jpg',
    },
    {
      src:
        'https://image.shutterstock.com/image-photo/red-fox-lies-on-sand-260nw-681246835.jpg',
    },
    {
      src:
        'https://image.shutterstock.com/image-photo/red-foxes-lie-on-sand-260nw-681246778.jpg',
    },
  ],
};

const tests = [
  {
    describe: 'Variable width',
    its: [
      {
        it: 'Display item with variable width ',
        props: {
          variableWidth: true,
          children: [
            <div key={1}>
              <div
                style={{ width: '150px', height: '100px', background: 'red' }}
              />
            </div>,
            <div key={2}>
              <div
                style={{ width: '100px', height: '100px', background: 'green' }}
              />
            </div>,
            <div key={3}>
              <div
                style={{ width: '100px', height: '100px', background: 'blue' }}
              />
            </div>,
          ],
        },
      },
    ],
  },
];

const controlsTests = [
  {
    prop: 'showControlsShadow',
    values: [true, false],
  },
  {
    prop: 'controlsStartEnd',
    values: ['disabled', 'hidden'],
  },
  {
    prop: 'buttonSkin',
    values: ['standard', 'inverted', 'light', 'transparent', 'premium'],
  },
  {
    prop: 'controlsSize',
    values: ['tiny', 'small', 'medium'],
  },
  {
    prop: 'controlsPosition',
    values: ['sides', 'overlay', 'bottom', 'none'],
    otherProps: {
      buttonSkin: 'inverted',
    },
  },
  {
    prop: 'imagesFit',
    values: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    otherProps: {
      images: [
        {
          src:
            'https://image.shutterstock.com/image-photo/japanese-red-fox-hokkaido-japan-600w-1678759726.jpg',
        },
        {
          src:
            'https://image.shutterstock.com/image-photo/japanese-red-fox-hokkaido-japan-600w-1678759726.jpg',
        },
      ],
    },
  },
  {
    prop: 'imagesPosition',
    values: ['top', 'center', 'bottom'],
    otherProps: {
      images: [
        {
          src:
            'https://image.shutterstock.com/image-photo/red-fox-largest-true-foxes-600w-744113647.jpg',
        },
        {
          src:
            'https://image.shutterstock.com/image-photo/red-fox-largest-true-foxes-600w-744113647.jpg',
        },
      ],
    },
  },
];

const createDriver = () =>
  uniTestkitFactoryCreator(carouselUniDriverFactory)({
    wrapper: document.body,
    dataHook: storySettings.dataHook,
  });

const checkIsLoading = async done => {
  const driver = createDriver();
  await eventually(async () => {
    return (await driver.isLoading()) ? Promise.reject() : Promise.resolve();
  });
  done();
};

const CarouselWrapper = ({ done, ...props }) => {
  useEffect(() => {
    checkIsLoading(done);
  }, [done]);

  return <Carousel {...props} />;
};

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(`${themeName ? `${themeName}|` : ''}Carousel`, () => {
    tests.forEach(({ describe, its }) => {
      its.forEach(({ it, props }) => {
        story(describe, () => {
          snap(it, done =>
            testWithTheme(
              <div style={{ maxWidth: '450px' }}>
                <CarouselWrapper
                  {...props}
                  dataHook={storySettings.dataHook}
                  done={done}
                />
              </div>,
            ),
          );
        });
      });
    });

    // Controls
    story('Controls', () => {
      controlsTests.forEach(({ prop, values, otherProps }) => {
        snap(prop, done =>
          testWithTheme(
            <div style={{ maxWidth: '450px' }}>
              <Layout>
                {values.map(value => {
                  return (
                    <Cell>
                      <CarouselWrapper
                        key={value}
                        dataHook={storySettings.dataHook}
                        done={done}
                        {...commonProps}
                        {...{ [prop]: value }}
                        {...otherProps}
                      />
                    </Cell>
                  );
                })}
              </Layout>
            </div>,
          ),
        );
      });
    });
  });
};
