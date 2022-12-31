import { Link } from 'react-router-dom';

function Navigation() {
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

export default Navigation;
