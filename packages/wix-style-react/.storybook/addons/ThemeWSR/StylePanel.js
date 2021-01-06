import React from 'react';
import { Col, Container, Row } from '../../../src/Grid';
import { Box, ColorInput, FillPreview, FormField, Tooltip } from '../../../src';
import { Cell, Layout } from '../../../src/Layout';

class StylePanel extends React.PureComponent {
  state = {
    mainColor: '#2B81CB', // B00
  };

  onChange(state) {
    const { onChange } = this.props;

    this.setState(state, () => {
      onChange && onChange(state);
    });
  }

  render() {
    const { mainColor } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col>
            <FormField label="Color">
              <ColorInput
                value={mainColor}
                onChange={mainColor => this.onChange({ mainColor })}
              />
            </FormField>
            <FormField label="Preset">
              <Box margin="10px">
                <Layout
                  cols={5}
                  justifyItems="center"
                  alignItems="center"
                  gap="50%"
                >
                  <Cell span={1}>
                    <Box width={25}>
                      <Tooltip content="Primary">
                        <FillPreview
                          fill="#2B81CB"
                          onClick={event => this.onChange({ mainColor: '#2B81CB' })}
                        />
                      </Tooltip>
                    </Box>
                  </Cell>
                  <Cell span={1}>
                    <Box width={25}>
                      <Tooltip content="Destructive">
                        <FillPreview
                          fill="#D6453D"
                          onClick={event => this.onChange({ mainColor: '#D6453D' })}
                        />
                      </Tooltip>
                    </Box>
                  </Cell>
                  <Cell span={1}>
                    <Box width={25}>
                      <Tooltip content="Premium">
                        <FillPreview
                          fill="#8E21B1"
                          onClick={event => this.onChange({ mainColor: '#8E21B1' })}
                        />
                      </Tooltip>
                    </Box>
                  </Cell>
                  <Cell span={1}>
                    <Box width={25}>
                      <Tooltip content="Success">
                        <FillPreview
                          fill="#44823F"
                          onClick={event => this.onChange({ mainColor: '#44823F' })}
                        />
                      </Tooltip>
                    </Box>
                  </Cell>
                  <Cell span={1}>
                    <Box width={25}>
                      <Tooltip content="Warning">
                        <FillPreview
                          fill="#C68801"
                          onClick={event => this.onChange({ mainColor: '#C68801' })}
                        />
                      </Tooltip>
                    </Box>
                  </Cell>
                </Layout>
              </Box>
            </FormField>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StylePanel;
