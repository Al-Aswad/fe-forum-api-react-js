import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';

function Navigation({ authUser, logout, pathname }) {
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
              <Link to="/login">
                <Button
                  colorScheme="blue"
                  variant="outline"
                >
                  Masuk
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  colorScheme="blue"
                >
                  Daftar
                </Button>
              </Link>
            </div>
          )
          : (
            <div className="flex items-center gap-2">
              <img className="rounded-full w-10" src={authUser.avatar} alt="img" />
              <h3 className="font-semibold text-md capitalize">
                {authUser.name}
              </h3>
              <Button
                onClick={logout}
                colorScheme="blue"
                variant="outline"
              >
                Keluar
              </Button>

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
  pathname: '/',
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape),
  logout: PropTypes.func,
  pathname: PropTypes.string,
};

export default Navigation;
