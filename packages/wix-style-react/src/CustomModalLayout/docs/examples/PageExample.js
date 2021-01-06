/* eslint-disable */
import React from 'react';

class PageExample extends React.Component {
  state = {
    isModalOpened: false,
  };

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  render() {
    const { isModalOpened } = this.state;
    return (
      <>
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal
          isOpen={isModalOpened}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick
        >
          <CustomModalLayout
            width="1254px"
            title={
              <CustomModalLayout.Title>
                Custom title
                <IconButton size="small">
                  <Icons.More />
                </IconButton>
              </CustomModalLayout.Title>
            }
            removeContentPadding
            primaryButtonText="Save"
            primaryButtonOnClick={this.closeModal}
            secondaryButtonText="Cancel"
            secondaryButtonOnClick={this.closeModal}
            onCloseButtonClick={this.closeModal}
          >
            <Page sidePadding={30}>
              <Page.Content>
                <Box marginTop={5}>
                  <Container>
                    {Array.from({ length: 3 }, (_, index) => (
                      <Row key={`row-${index}`}>
                        <Col>
                          <Card>
                            <Card.Header title={`Card ${index + 1}`} />
                            <Card.Divider />
                            <Card.Content>
                              <Text size="medium">Lorem ipsum dolor</Text>
                            </Card.Content>
                          </Card>
                        </Col>
                      </Row>
                    ))}
                  </Container>
                </Box>
              </Page.Content>
            </Page>
          </CustomModalLayout>
        </Modal>
      </>
    );
  }
}
