import * as React from 'react';
import SkeletonLine from '..';
import { skeletonLineTestkitFactory } from '../../../testkit';
import { skeletonLineTestkitFactory as skeletonLineEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { skeletonLineTestkitFactory as skeletonLinePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function skeletonLineWithMandatoryProps() {
  return <SkeletonLine />;
}

function skeletonLineWithAllProps() {
  return (
    <SkeletonLine
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = skeletonLineTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = skeletonLineEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await skeletonLinePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
