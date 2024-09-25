import React from 'react';
import styles from './login-form.module.css';
import Field from './field';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  // TBD: set option as theme color (lift up state)
  const [favouriteColor, setFavouriteColor] = React.useState('');
  const [user, setUser] = React.useState({
    userName: '',
    email: '',
    password: '',
  });
  const id = React.useId();
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
        <div className={styles['input']}>
          <label htmlFor={`${id}-name`}>Loved name</label>
          <input
            type="text"
            id={id}
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
        </div>
        <div className={styles['input']}>
          <label htmlFor={`${id}-email`}>Email</label>
          <input type="email" id={id} name="email" value={user.email} onChange={handleChange} />
        </div>
        <div className={styles['input']}>
          <label htmlFor={`${id}-password`}>Password</label>
          <input
            type="password"
            id={id}
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
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
}

export default LoginForm;
