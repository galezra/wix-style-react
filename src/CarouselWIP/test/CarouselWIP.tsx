import * as React from 'react';
import CarouselWIP from '..';
import { CarouselWIPTestkit } from '../../../testkit';
import { CarouselWIPTestkit as CarouselWIPEnzymeTestkit } from '../../../testkit/enzyme';
import { CarouselWIPTestkit as CarouselWIPPuppeteerTestkit } from '../../../testkit/puppeteer';
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
  const testkit = CarouselWIPTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = CarouselWIPEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await CarouselWIPPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
