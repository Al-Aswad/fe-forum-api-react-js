import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitHandler() {
    if (email === '' || password === '') {
      alert('email atau password tidak boleh kosong');
      return;
    }

    login({ email, password });
  }

  return (
    <form className="flex flex-col gap-4">
      <input className="input" type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      <input className="input" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button type="button" className="btn-primary" onClick={onSubmitHandler}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
