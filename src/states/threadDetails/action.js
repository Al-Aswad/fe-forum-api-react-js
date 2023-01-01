import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRAL_VOTE_THREAD_DETAIL: 'NEUTRAL_VOTE_THREAD_DETAIL',
};

function receiveThreadDetailActionActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addCommentActionCreator({ comment, threadId }) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
      threadId,
    },
  };
}

function upVoteThreadDetailActionCreator({ vote, threadId }) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId: vote.userId,
    },
  };
}

function neutralVoteThreadDetailActionCreator({ vote, threadId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId: vote.userId,
    },
  };
}

function downVoteThreadDetailActionCreator({ vote, threadId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId: vote.userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadActionCreator());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      const threads = await api.getAllThreads();

      dispatch(receiveThreadDetailActionActionCreator(threadDetail));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error);
    }

    dispatch(hideLoading());
  };
}

function asyncAddComment({ content, threadId }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const comment = await api.createComment({ content, threadId });

      dispatch(addCommentActionCreator({ comment, threadId }));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const vote = await api.upVoteThread(threadId);

      dispatch(upVoteThreadDetailActionCreator({ vote, threadId }));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncNeutralVoteThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const vote = await api.neutralVoteThread(threadId);

      dispatch(neutralVoteThreadDetailActionCreator({ vote, threadId }));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const vote = await api.downVoteThread(threadId);

      dispatch(downVoteThreadDetailActionCreator({ vote, threadId }));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionActionCreator,
  clearThreadActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncUpVoteThread,
  asyncNeutralVoteThread,
  asyncDownVoteThread,

};
