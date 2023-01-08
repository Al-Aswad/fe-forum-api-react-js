/**
 * skenario test
 *
 * - asyncReveiveThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 *
 * - asyncPopulateUsersAndThreads thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  addThreadActionCreator, asyncAddThread, asyncReveiveThreads,
  asyncUpVoteThread,
  receiveThreadsActionCreator, upVoteThreadActionCreator,
} from './action';

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

const fakeAddThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeUpVote = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};

const fakeUpVoteResponse = {
  id: 'vote-1',
  userId: 'users-1',
  threadId: 'thread-1',
  voteType: 1,
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReveiveThreads thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncReveiveThreads()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncReveiveThreads()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._createThread = api.createThread;
  });

  afterEach(() => {
    // restore original implementation
    api.createThread = api._createThread;

    // delete backup
    delete api._createThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.createThread = () => Promise.resolve(fakeAddThreadResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncAddThread({ title: 'sss', category: 'ss', body: 'ss' })(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeAddThreadResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // stub implementation
    api.createThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();
    // action
    await asyncAddThread({ title: 'sss', category: 'ss', body: 'ss' })(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncUpVoteThread thunk', () => {
//   beforeEach(() => {
//     // backup original implementation
//     api._upVoteThread = api.upVoteThread;
//   });

  //   afterEach(() => {
  //     // restore original implementation
  //     api.upVoteThread = api._upVoteThread;

//     // delete backup
//     delete api._upVoteThread;
//   });
//     // stub implementation
//     api.createThread = () => Promise.reject(fakeErrorResponse);
//     // mock dispatch
//     const dispatch = jest.fn();
//     // mock alert
//     window.alert = jest.fn();
//     // action
//     await asyncUpVoteThread({ title: 'sss', category: 'ss', body: 'ss' })(dispatch);
//     // assert
//     expect(dispatch).toHaveBeenCalledWith(showLoading());
//     expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
//     expect(dispatch).toHaveBeenCalledWith(hideLoading());
//   });
});
