import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_VOTE_THREAD: 'TOGGLE_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleVoteActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncReveiveThreads() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threads = await api.getAllThreads();

      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleVoteActionCreator,
  asyncReveiveThreads,
};
