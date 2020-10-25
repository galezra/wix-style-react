import * as React from 'react';
import SkeletonRectangle from '..';
import { skeletonRectangleTestkitFactory } from '../../../testkit';
import { skeletonRectangleTestkitFactory as skeletonRectangleEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { skeletonRectangleTestkitFactory as skeletonRectanglePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function skeletonRectangleWithMandatoryProps() {
  return <SkeletonRectangle />;
}

function skeletonRectangleWithAllProps() {
  return (
    <SkeletonRectangle
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = skeletonRectangleTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = skeletonRectangleEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await skeletonRectanglePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
