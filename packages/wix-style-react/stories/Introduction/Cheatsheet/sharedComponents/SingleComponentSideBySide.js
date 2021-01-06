import React from 'react';

import ComponentNaming from './ComponentNaming';
import singleComponentSizes from './constants';

import { Row, Col } from 'wix-style-react';

const SingleComponentSideBySide = ({
  name,
  componentsNames,
  children,
  size = singleComponentSizes.fullWidth,
}) => (
  <Row>
    <Col span={4}>
      <ComponentNaming name={name} componentsNames={componentsNames} />
    </Col>
    <Col span={8}>
      <Row>
        <Col span={size}>{children}</Col>
      </Row>
    </Col>
  </Row>
);

export default SingleComponentSideBySide;
