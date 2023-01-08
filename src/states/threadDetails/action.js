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
  UP_VOTE_COMMENT_DETAIL: 'UP_VOTE_COMMENT_DETAIL',
  DOWN_VOTE_COMMENT_DETAIL: 'DOWN_VOTE_COMMENT_DETAIL',
  NEUTRAL_VOTE_COMMENT_DETAIL: 'NEUTRAL_VOTE_COMMENT_DETAIL',
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

function upVoteThreadDetailActionCreator({ userId, threadId }) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralVoteThreadDetailActionCreator({ userId, threadId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator({ userId, threadId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function upVoteCommentDetailActionCreator({ userId, commentId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT_DETAIL,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralVoteCommentDetailActionCreator({ userId, commentId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT_DETAIL,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentDetailActionCreator({ userId, commentId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT_DETAIL,
    payload: {
      commentId,
      userId,
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
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(upVoteThreadDetailActionCreator({ userId: authUser.id, threadId }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteThreadDetailActionCreator({ userId: authUser.id, threadId }));
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
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(downVoteThreadDetailActionCreator({ userId: authUser.id, threadId }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteThreadDetailActionCreator({ userId: authUser.id, threadId }));
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(upVoteCommentDetailActionCreator({ userId: authUser.id, commentId }));

    try {
      await api.upVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteCommentDetailActionCreator({ userId: authUser.id, threadId }));
    }

    dispatch(hideLoading());
  };
}

function asyncNeutralVoteComment({ threadId, commentId }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const vote = await api.neutralVoteComment({ threadId, commentId });

      dispatch(neutralVoteCommentDetailActionCreator({ vote, threadId }));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser } = getState();
    dispatch(downVoteCommentDetailActionCreator({ userId: authUser.id, commentId }));

    try {
      await api.downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(neutralVoteCommentDetailActionCreator({ userId: authUser.id, threadId }));
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
  asyncUpVoteComment,
  asyncNeutralVoteComment,
  asyncDownVoteComment,
};
