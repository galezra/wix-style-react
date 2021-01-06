export const layoutSpacing = `
<Layout cols={2}>
    <Cell>
      <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
        <Layout cols={1}>
            <Heading appearance="H1">H1 - Page Title, 32px / 42px</Heading>
            <Heading appearance="H2">H2 - Page Section Title, 24px / 30px</Heading>
            <Heading appearance="H3">H3 - Card Title, 20px / 24px</Heading>
        </Layout>
      </WixStyleReactProvider>
    </Cell>
    <Cell>
    <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
        <Layout cols={1}>
            <Heading appearance="H1">H1 - Page Title, 36px / 48px</Heading>
            <Heading appearance="H2">H2 - Page Section Title, 28px / 36px</Heading>
            <Heading appearance="H3">H3 - Card Title, 20px / 24px</Heading>
        </Layout>
      </WixStyleReactProvider>
    </Cell>
</Layout>
`;
