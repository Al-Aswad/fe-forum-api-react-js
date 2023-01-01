import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ authUser, logout }) {
  const { pathname } = useLocation();

  return (
    <section className="navigation">
      <div className="flex items-center gap-10">
        <Link to="/" className="font-semibold text-xl text">Forum API</Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className={pathname === '/' ? 'text active' : 'text'}>Forum</Link>
          <Link to="/leaderboard" className={pathname === '/leaderboard' ? 'text active' : 'text'}>
            Leaderboard
          </Link>
        </div>
      </div>

      {
        authUser === null
          ? (
            <div className="flex gap-4">
              <Link to="/login" className="btn-secondary">Masuk</Link>
              <Link to="/register" className="btn-primary">Daftar</Link>
            </div>
          )
          : (
            <div className="flex items-center gap-2">
              <img className="rounded-full w-10" src={authUser.avatar} alt="img" />
              <h3 className="font-semibold text-md capitalize">
                {authUser.name}
              </h3>
              <button type="button" className="btn-secondary ml-2" onClick={logout}>Keluar</button>

            </div>
          )
      }
    </section>
  );
}

const authUserShape = {
  name: PropTypes.string,
  email: PropTypes.string,
  photo: PropTypes.string,

};

Navigation.defaultProps = {
  logout: () => {},
  authUser: null,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  logout: PropTypes.func,
};

export default Navigation;
