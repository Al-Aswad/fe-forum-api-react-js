import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const onLogin = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <section className="bg-blue-100 min-h-screen flex justify-center items-center">
      <article className="flex flex-col">
        <h1 className="font-semibold text-xl text">Login </h1>
        <div className="rounded-md p-10 bg-white md:w-[400px] sm:w-full mt-4">
          <LoginInput login={onLogin} />
          <p className="mt-4 text">
            Sudah punya akun ?
            {' '}
            <Link to="/">Daftar</Link>
          </p>
        </div>
      </article>
    </section>
  );
}

export default LoginPage;
