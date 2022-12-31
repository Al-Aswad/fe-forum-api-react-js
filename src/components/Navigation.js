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
        <button type="button" className="btn-secondary">Masuk</button>
        <button type="button" className="btn-primary">Daftar</button>
      </div>
    </section>
  );
}

export default Navigation;
