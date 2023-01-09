import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  function onSubmitHandler() {
    if (name === '' || email === '' || password === '') {
      alert('Data tidak lengkap');

      return;
    }

    register({ name, email, password });
  }

  return (
    <form className="flex flex-col gap-4">
      <input className="input" type="text" value={name} onChange={onNameChange} placeholder="Name" />
      <input className="input" type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      <input className="input" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button type="button" className="btn-primary" onClick={onSubmitHandler}>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
