import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderBoardActionCreator(leaderBoards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderBoards,
    },
  };
}

function asyncReceiveLeadeBoard() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const leaderboards = await api.getLeaderBoards();

      dispatch(receiveLeaderBoardActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveLeaderBoardActionCreator,
  asyncReceiveLeadeBoard,
};
