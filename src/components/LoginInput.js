import { Button } from '@chakra-ui/react';
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
    <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
      <input className="input" type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      <input className="input" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <Button
        type="submit"
        colorScheme="blue"
      >
        Login
      </Button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
