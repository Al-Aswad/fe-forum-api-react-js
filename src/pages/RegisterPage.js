import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <section className="register-page">
      <article className="flex flex-col">
        <h1 className="font-semibold text-xl text">Buat Akun </h1>
        <div className="rounded-md p-10 bg-white md:w-[400px] sm:w-full mt-4">
          <RegisterInput register={onRegister} />
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
