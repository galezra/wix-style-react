import React from 'react';

export const suggestionsWidgetExample = `
<CarouselWIP
  infinite={false}
  controlsSkin="inverted"
  controlsPosition="overlay"
  controlsStartEnd="hidden"
  slidingType="reveal-one"
  showControlsShadow
  startEndOffset={24}
>
  <Box maxWidth="600px" padding="6px">
    <Card showShadow>
      <MarketingLayout
        title="Card 1"
        description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
        actions={<Button size="small">Get Started</Button>}
        size="tiny"
        image={<img src="https://picsum.photos/100/100" />}
      />
    </Card>
  </Box>
  <Box maxWidth="600px" padding="6px">
    <Card showShadow>
      <MarketingLayout
        title="Card 2"
        description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
        actions={<Button size="small">Get Started</Button>}
        size="tiny"
        image={<img src="https://picsum.photos/100/100" />}
      />
    </Card>
  </Box>
  <Box maxWidth="600px" padding="6px">
    <Card showShadow>
      <MarketingLayout
        title="Card 3"
        description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
        actions={<Button size="small">Get Started</Button>}
        size="tiny"
        image={<img src="https://picsum.photos/100/100" />}
      />
    </Card>
  </Box>
  <Box maxWidth="600px" padding="6px">
    <Card showShadow>
      <MarketingLayout
        title="Card 4"
        description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
        actions={<Button size="small">Get Started</Button>}
        size="tiny"
        image={<img src="https://picsum.photos/100/100" />}
      />
    </Card>
  </Box>
  <Box maxWidth="600px" padding="6px">
    <Card showShadow>
      <MarketingLayout
        title="Card 5"
        description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
        actions={<Button size="small">Get Started</Button>}
        size="tiny"
        image={<img src="https://picsum.photos/100/100" />}
      />
    </Card>
  </Box>
  <Box maxWidth="600px" padding="6px">
    <Card showShadow>
      <MarketingLayout
        title="Card 6"
        description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
        actions={<Button size="small">Get Started</Button>}
        size="tiny"
        image={<img src="https://picsum.photos/100/100" />}
      />
    </Card>
  </Box>
  <Box maxWidth="600px" padding="6px">
    <Card showShadow>
      <MarketingLayout
        title="Card 7"
        description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
        actions={<Button size="small">Get Started</Button>}
        size="tiny"
        image={<img src="https://picsum.photos/100/100" />}
      />
    </Card>
  </Box>
</CarouselWIP>
`;

export const controlsPositionExample = `
<Carousel
  buttonSkin="inverted"
  controlsPosition="bottom"
  controlsSize="medium"
  images={[
    {
      src: 'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg'
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg'
    },
    {
      src: 'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg'
    }
  ]}
/>
`;
