import { ActionType } from './action';

function leaderBoardsReducer(leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action.payload.leaderBoards;

    default:
      return leaderboards;
  }
}

export default leaderBoardsReducer;
