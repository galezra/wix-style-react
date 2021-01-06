import React from 'react';

import { Container, Row, Col, Card, Text } from 'wix-style-react';

const FamilyStructure = ({ title, children, showPreview }) => (
  <Card>
    <Card.Header title={title} />
    <Card.Content>
      <Container fluid>
        <Row>
          <Col span={4}>
            <Text size="small" skin="disabled" weight="bold">
              INDEX NAME & I.C.
            </Text>
          </Col>
          <Col span={8}>
            {showPreview && (
              <Text size="small" skin="disabled" weight="bold">
                PREVIEW
              </Text>
            )}
          </Col>
        </Row>
        {children}
      </Container>
    </Card.Content>
  </Card>
);

export default FamilyStructure;
