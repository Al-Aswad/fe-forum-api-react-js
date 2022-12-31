import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispacth = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispacth(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <section className="login-page">
      <article className="flex flex-col">
        <h1 className="font-semibold text-xl text">Login </h1>
        <div className="rounded-md p-10 bg-white md:w-[400px] sm:w-full mt-4">
          <LoginInput login={onLogin} />
          <p className="mt-4 text">
            Sudah punya akun ?
            {' '}
            <Link to="/register">Daftar</Link>
          </p>
        </div>
      </article>
    </section>
  );
}

export default LoginPage;
