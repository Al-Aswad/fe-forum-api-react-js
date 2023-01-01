import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
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

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadActionCreator());
    try {
      const talkDetail = await api.getThreadDetail(threadId);
      const threads = await api.getAllThreads();

      dispatch(receiveThreadDetailActionActionCreator(talkDetail));
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

export {
  ActionType,
  receiveThreadDetailActionActionCreator,
  clearThreadActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
};
