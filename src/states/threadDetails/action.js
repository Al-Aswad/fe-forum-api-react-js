import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
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

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch(clearThreadActionCreator());
    try {
      const talkDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionActionCreator(talkDetail));
    } catch (error) {
      alert(error);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionActionCreator,
  clearThreadActionCreator,
  asyncReceiveThreadDetail,
};
