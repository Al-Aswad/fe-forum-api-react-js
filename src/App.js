import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import AddThreadPage from './pages/AddThreadPage';
import DetailThreadPages from './pages/DetailThreadPage';
import HomePage from './pages/HomePage';
import Leaderboard from './pages/LeaderBoard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncUnSetAuthUser } from './states/authUser/action';
import { asyncIsPreloadProcess } from './states/isPreload/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(asyncIsPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    // @TODO: dispatch async action to sign out
    dispatch(asyncUnSetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header className="py-6 px-10 md:px-40 bg-white">
          <Navigation authUser={authUser} logout={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/threads/create" element={<AddThreadPage />} />
            <Route path="/threads/:id" element={<DetailThreadPages />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
