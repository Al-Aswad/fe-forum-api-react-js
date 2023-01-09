const fakeApi = (() => {
  const fakeThreadsResponse = [
    {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-1',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
    {
      id: 'thread-2',
      title: 'Thread Kedua',
      body: 'Ini adalah thread kedua',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      ownerId: 'users-2',
      upVotesBy: [],
      downVotesBy: [],
      totalComments: 0,
    },
  ];

  const fakeUsersResponse = [
    {
      id: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    {
      id: 'jane_doe',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    {
      id: 'fulan',
      name: 'Si Fulan',
      email: 'fulan@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
  ];

  const fakeErrorResponse = new Error('Ups, something went wrong');

  return {
    fakeThreadsResponse,
    fakeUsersResponse,
    fakeErrorResponse,
  };
})();
