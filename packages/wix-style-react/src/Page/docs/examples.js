export const fullNotScrollableContent = `
class FullNotScrollableContent extends React.Component {
  state = {
    isModalOpened: false,
  };

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  render() {
    const { isModalOpened } = this.state;
    return (
      <Box>
        <Button onClick={this.openModal}>Open Page</Button>
        <Modal isOpen={isModalOpened} onRequestClose={this.closeModal}>
          <Page>
            <Page.Header
              title="Press Esc. to exit"
              subtitle="This is a nice subtitle"
            />
            <Page.Tail>
              <Tabs
                activeId={1}
                hasDivider={false}
                items={[
                  { id: 1, title: 'item 1' },
                  { id: 2, title: 'item 2' },
                ]}
              />
            </Page.Tail>
            <Page.Content>
              <Layout>
                <Cell>
                  <Card>
                    <Card.Header title="Card" />
                    <Card.Divider />
                    <Card.Content>Some content</Card.Content>
                  </Card>
                </Cell>
                <Cell span={6}>
                  <Card>
                    <Card.Header title="Card" />
                    <Card.Divider />
                    <Card.Content>Some content</Card.Content>
                  </Card>
                </Cell>
                <Cell span={6}>
                  <Card>
                    <Card.Header title="Card" />
                    <Card.Divider />
                    <Card.Content>Some content</Card.Content>
                  </Card>
                </Cell>
              </Layout>
            </Page.Content>

            <Page.FixedFooter>
              <PageFooter divider>
                <PageFooter.Start>
                  <Button size="medium" skin="inverted" prefixIcon={<Icons.ArrowLeft />}>
                    Go Back
                  </Button>
                </PageFooter.Start>
                <PageFooter.End>
                  <Box marginRight="SP2">
                    <Button size="medium" priority="secondary">
                      Skip
                    </Button>
                  </Box>
                  <Button size="medium">Go Next</Button>
                </PageFooter.End>
              </PageFooter>
            </Page.FixedFooter>
          </Page>
        </Modal>
      </Box>
    );
  }
}
`;

export const fullScrollableContent = `
class FullScrollableContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
    };

    this.ref = React.createRef(null);
  }

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  onClick = top => this.ref.current.scrollTo({ top, behavior: 'smooth' });

  render() {
    const { isModalOpened } = this.state;
    return (
      <Box>
        <Button onClick={this.openModal}>Open Page</Button>
        <Modal isOpen={isModalOpened} onRequestClose={this.closeModal}>
          <Page ref={this.ref}>
            <Page.Header
              title="Press Esc. to exit"
              subtitle="This is a nice subtitle"
              actionsBar={<Button onClick={() => this.onClick(10000)}>Click here to scroll down!</Button>}
            />
            <Page.Tail>
              <Tabs
                activeId={1}
                hasDivider={false}
                items={[
                  { id: 1, title: 'item 1' },
                  { id: 2, title: 'item 2' },
                ]}
              />
            </Page.Tail>
            <Page.Content>
              <Card>
                <Card.Content>
                  {Array(100)
                    .fill(' ')
                    .map((item, i) => (
                      <div key={'sticky-elements-example-item-' + i}>
                        {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam facilisis molestie magna vitae pellentesque.
                        <br/>
                      </div>
                    ))}
                </Card.Content>
              </Card>
            </Page.Content>

            <Page.FixedFooter>
              <PageFooter divider>
                <PageFooter.Start>
                  <Button size="medium" skin="inverted" prefixIcon={<Icons.ArrowLeft />}>
                    Go Back
                  </Button>
                </PageFooter.Start>
                <PageFooter.End>
                  <Box marginRight="SP2">
                    <Button size="medium" priority="secondary">
                      Skip
                    </Button>
                  </Box>
                  <Button size="medium" onClick={() => this.onClick(0)}>Click here to scroll up!</Button>
                </PageFooter.End>
              </PageFooter>
            </Page.FixedFooter>
          </Page>
        </Modal>
      </Box>
    );
  }
}
`;
