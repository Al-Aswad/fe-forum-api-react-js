import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reduces';
import leaderBoardsReducer from './LeaderBoard/reducer';
import threadDetailReducer from './threadDetails/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderBoards: leaderBoardsReducer,
    // comments: commentReducer,
    loadingBar: loadingBarReducer,

  },
});

export default store;
