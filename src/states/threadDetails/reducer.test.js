/* eslint-disable no-constant-condition */

import threadDetailReducer from './reducer';

/**
 * test scenario for threadDetailsReducer
 *
 *  - threadDetailsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREAD_DETAIL action
 *
 */
describe('threadDetailsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
});
