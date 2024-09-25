import React from 'react';
import styles from './login-form.module.css';
import { useNavigate } from 'react-router-dom';
import InputField from './input-field';

const LoginForm = () => {
  // TBD: set option as theme color (lift up state)
  const [favouriteColor, setFavouriteColor] = React.useState('');
  const [user, setUser] = React.useState({
    userName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    setUser({
      ...user,
      [eventName]: eventValue,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    window.localStorage.setItem('user', JSON.stringify(user));
    navigate('/home');
  };

  return (
    <>
      <form className={styles['login__form']} onSubmit={handleLogin}>
        <InputField
          label="Loved name"
          type="text"
          name="userName"
          value={user.userName}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <fieldset>
          <legend>What is your favorite color?</legend>
          <select
            name="color"
            id="color"
            onChange={(event) => setFavouriteColor(event.target.value)}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </fieldset>
        <button>Log in</button>
      </form>
    </>
  );
};

export default LoginForm;
