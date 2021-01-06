# Layouting

Layouting is a category of techniques which allow us to position elements within a container - considering factors such as positioning flow, elements around them, their parent container, viewport and more.

The library provides three utilities in order to layout elements fluidly, so that each is designed and appropriate for a different use case.

Before we start, we should understand there are two main approaches to layout:

1. Content-first - an approach that advocates adding the relevant content at first and then adjusting the layout, as necessary. The content is the factor that instructs the structure.
2. Layout-first - an approach that advocates defining the layout's structure and then adding content, based on that structure.

Understanding the approaches above will assist us to choose the appropriate solution.

Let's start.

<br/>

## The `<Box/>` Component

A one-dimensional layout component based on Flexbox, that implements the content-first approach.

The component allows us adding children directly and those are displayed one by one as a “stack” in a particular direction - horizontally or vertically.

Mostly would be useful for layouting small-scale areas.

### Examples

#### Icon & Text Alignment

This example uses `<Box/>`s to pad and align the icon vertically beside the text:

```jsx
<Box verticalAlign="middle">
  <Box marginRight="1">
    <Icons.HintSmall />
  </Box>
  <Text>
    This is a hint!
  </Text>
</Box>
```

#### Header

This example uses `<Box/>`s to spread the child elements horizontally over the whole width:

```jsx
<Box align="space-between" verticalAlign="middle">
  <Heading>My Title</Heading>
  <Box verticalAlign="middle">
    <Text>Hello John!</Text>
    <Box marginLeft="3">
      <Avatar />
    </Box>
  </Box>
</Box>
```

<br/>

## Grid's Family

A two-dimensional layout family (`<Container/>`, `<Row/>` & `<Col/>`), that implements the layout-first approach.

This family allows us to align the children into rows and columns. The rows are divided by 12 columns at most, whereas the width of each column is fluid (defined relatively by the viewport size).

Mostly would be useful for larger-scale areas compared to the `<Box/>` component.

### Examples

#### Form

This example uses Grid's family to display a list of labels beside aligned inputs:

```jsx
<Container>
	<Row>
		<Col span={1}>
			<FormField label="User" required />
		</Col>
		<Col span={11}>
			<Input />
		</Col>
	</Row>
	<Row>
		<Col span={1}>
			<FormField label="Email" />
		</Col>
		<Col span={11}>
			<Input />
		</Col>
	</Row>
	<Row>
		<Col span={1}>
			<FormField label="Address" infoContent="I help you to fill info" />
		</Col>
		<Col span={11}>
			<Input />
		</Col>
	</Row>
</Container>
```

#### Grid View

This example uses Grid's family to divide a list of cards between rows and columns:

```jsx
<Container fluid>
	<Row>
		<Col span={6}>
			<CardGalleryItem title="Title" subtitle="Subtitle" />
		</Col>
		<Col span={6}>
			<CardGalleryItem title="Title" subtitle="Subtitle" />
		</Col>
	</Row>
	<Row>
		<Col span={6}>
			<CardGalleryItem title="Title" subtitle="Subtitle" />
		</Col>
		<Col span={6}>
			<CardGalleryItem title="Title" subtitle="Subtitle" />
		</Col>
	</Row>
	<Row>
		<Col span={6}>
			<CardGalleryItem title="Title" subtitle="Subtitle" />
		</Col>
		<Col span={6}>
			<CardGalleryItem title="Title" subtitle="Subtitle" />
		</Col>
	</Row>
</Container>
```

Also, we can iterate through an array that holds the items:

```jsx
class GridViewExample extends React.Component {
  state = {
    list: Array(3).fill([
      ...Array(2).fill({ title: 'Title', subtitle: 'Subtitle' }),
    ]),
  };

  render() {
    const { list } = this.state;

    return (
      <Container fluid>
        {list.map(row => {
          return (
            <Row>
              {row.map(item => (
                <Col span={6}>
                  <CardGalleryItem
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </Col>
              ))}
            </Row>
          );
        })}
      </Container>
    );
  }
}
```

Notice the following constraints:

- In order to make `<Container/>` be fluid, regardless the viewport width, we should use the `fluid` prop
- We have to use `<Row/>` to break the rows explicitly (which means we cannot just shed the items within the `<Container/>`)
- Our data collection should be suitable to the grid structure as much as possible (apparently sort of two-dimensional array), so we can iterate through that collection easily (without getting in trouble with complicated loops)
- We cannot control the gaps between the columns

However, what if we look for a solution that allows overcoming the constraints above?

<br/>

## Layout's Family

A flexible layout family (`<Layout/>` & `<Cell/>`) based on CSS Grid, that could implement both approaches.

This family allows us to layout one-dimensionally or two-dimensionally either, according to the use-case. Similar to Grid's family, it enables to divide the cells into "virtual" columns, without the constraint to deal with breaking rows - because of the fact that it places the items automatically (considering their `span` width and the available viewport space).

Mostly would be useful for larger-scale areas, much like the Grid's family, when more flexibility is needed - like:

* As we already mentioned, there is no need to deal with explicit rows - just adding the `<Cell/>`s into the container
* More suitable for iterating through one-dimensional data collection
* The gaps between the cells are controllable
* The amount of the maximum columns is adjustable (could be 12 or lower)

### Examples

#### Grid View

This example uses Layout's family to divide a list of cards between rows and columns:

```jsx
class GridViewExample extends React.Component {
  state = {
    list: Array(6).fill({ title: 'Title', subtitle: 'Subtitle' }),
  };

  render() {
    const { list } = this.state;

    return (
      <Layout>
        {list.map(item => (
          <Cell span={6}>
            <CardGalleryItem title={item.title} subtitle={item.subtitle} />
          </Cell>
        ))}
      </Layout>
    );
  }
}
```

<br/>

## Conclusion

We covered three different ways to layout elements with the library.

We should know that there is no absolute formula to choose the right solution, but we can ask ourselves the following:

* What's the scale of the area we need to layout?
* What's the layout dimension?
* What's the layout-approach that is more relevant for us?
* Do we need to iterate through a data collection? If so, in which way is it structured?
* How much the layout should be flexible?

Here’s a comparison:

|            | `Box`                         | Grid's Family      | Layout's Family |
|------------|-------------------------------|--------------------|-----------------|
| Dimensions | One                           | Two                | Up to you       |
| Based on   | Flexbox                       | Fluid column width | CSS Grid        |
| Approach   | Content-first                 | Layout-First       | Up to you       |
| Scale      | Small                         | Medium/Large       | Medium/Large    |
| Examples   | Icon & Text Alignment, Header | Form, Grid View    | Grid View       |
