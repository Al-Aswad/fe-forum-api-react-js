/* eslint-disable no-constant-condition */
/**
 * test scenario for leaderBoardsReducer
 *
 *  - leaderBoardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_LEADERBOARD action
 *
 */

import leaderBoardsReducer from './reducer';

describe('leaderBoardReducer function ', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderBoardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_LEADERBOARD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADERBOARD',
      payload: {
        leaderBoards: [
          {
            user: {
              id: 'users-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 10,
          },
          {
            user: {
              id: 'users-2',
              name: 'Jane Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
            score: 5,
          },
        ],
      },
    };

    // action
    const nextState = leaderBoardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderBoards);
  });
});
