/* eslint-disable */
class ExampleVerticalScrollListeners extends React.Component {
  state = {
    verticalScrollArea: 'none',
    scrollTop: 0,
  };

  onScrollChanged = ({ target }) =>
    this.setState({ scrollTop: target.scrollTop });

  onScrollAreaChanged = ({ area }) =>
    this.setState({ verticalScrollArea: area.y });

  render() {
    return (
      <Page
        height="40vh"
        scrollProps={{
          onScrollChanged: this.onScrollChanged,
          onScrollAreaChanged: this.onScrollAreaChanged,
        }}
      >
        <Page.Header
          title={
            this.state.scrollTop === 0
              ? 'Scroll me down 👇'
              : 'See updated scroll values 👉'
          }
          actionsBar={
            <Box>
              <Text>Vertical Scroll Area:</Text>
              <Badge>{this.state.verticalScrollArea}</Badge>
              <Text style={{ marginLeft: '6px' }}>ScrollTop:</Text>
              <Badge>{this.state.scrollTop}</Badge>
            </Box>
          }
        />
        <Page.Content>
          {Array(40)
            .fill(' ')
            .map((item, i) => (
              <div key={'minimized-header-example-item-' + i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                facilisis molestie magna vitae pellentesque. Ut elementum
                accumsan nibh, ut faucibus velit. Vestibulum at mollis justo.
              </div>
            ))}
        </Page.Content>
      </Page>
    );
  }
}
render(ExampleVerticalScrollListeners);
