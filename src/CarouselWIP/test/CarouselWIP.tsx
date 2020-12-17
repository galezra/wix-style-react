import * as React from 'react';
import CarouselWIP from '..';
import { carouselWIPTestkitFactory } from '../../../testkit';
import { carouselWIPTestkitFactory as carouselWIPEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { carouselWIPTestkitFactory as carouselWIPPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function carouselWIPWithMandatoryProps() {
  return <CarouselWIP />;
}

function carouselWIPWithAllProps() {
  return (
    <CarouselWIP
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = carouselWIPTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = carouselWIPEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await carouselWIPPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
