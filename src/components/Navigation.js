import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ authUser, signOut }) {
  return (
    <section className="navigation">
      <div className="flex items-center gap-10">
        <Link to="/" className="font-semibold text-xl text">Forum API</Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text active">Forum</Link>
          <Link to="/leaderboard" className="text">Leaderboard</Link>
        </div>
      </div>
      <div className="flex gap-4">
        <Link to="/login" className="btn-secondary">Masuk</Link>
        <Link to="/register" className="btn-primary">Daftar</Link>
      </div>
    </section>
  );
}

const authUserShape = {
  name: PropTypes.string,
  email: PropTypes.string,
  photo: PropTypes.string,

};

Navigation.defaultProps = {
  signOut: () => {},
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func,
};

export default Navigation;
