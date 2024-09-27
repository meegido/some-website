import React from 'react';
import styles from './login-form.module.css';
import { useNavigate } from 'react-router-dom';
import InputField from './input-field';
import { UserContext } from '../../providers/user-provider';

const LoginForm = () => {
  // const navigate = useNavigate();
  const { user, updateUser } = React.useContext(UserContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateUser({
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('User logged in:', user);

    // navigate('/home');
  };

  return (
    <>
      <form className={styles['login__form']} onSubmit={handleLogin}>
        <InputField
          label="Loved name"
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default LoginForm;
