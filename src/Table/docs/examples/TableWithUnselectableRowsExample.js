/* eslint-disable */

() => {
  const data = [
    { category: 'All posts', posts: '123 posts', unselectable: true },
    { category: 'Business', posts: '76 posts' },
    { category: 'Culture', posts: '342 posts' },
    { category: 'History', posts: '1024 posts' },
  ];

  const columns = [
    { title: 'Name', render: row => row.category },
    { title: 'Type', render: row => row.posts },
    { render: row => <TableActionCell secondaryActions={[{}]} /> },
  ];

  return (
    <Card>
      <Table showSelection data={data} columns={columns} />
    </Card>
  );
};
