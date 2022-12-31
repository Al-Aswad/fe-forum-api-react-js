import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <section className="bg-blue-100 min-h-screen flex justify-center items-center">
      <article className="flex flex-col">
        <h1 className="font-semibold text-xl text">Buat Akun </h1>
        <div className="rounded-md p-10 bg-white md:w-[400px] sm:w-full mt-4">
          <RegisterInput />
          <p className="mt-4 text">
            Sudah punya akun ?
            {' '}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </article>
    </section>
  );
}

export default RegisterPage;
