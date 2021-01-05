import * as React from 'react';
import PulseAnimation from '..';
import { PulseAnimationTestkit } from '../../../testkit';
import { PulseAnimationTestkit as PulseAnimationEnzymeTestkit } from '../../../testkit/enzyme';
import { PulseAnimationTestkit as PulseAnimationPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function pulseAnimationWithMandatoryProps() {
  return <PulseAnimation />;
}

function pulseAnimationWithAllProps() {
  return (
    <PulseAnimation
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = PulseAnimationTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = PulseAnimationEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await PulseAnimationPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
