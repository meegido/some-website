import React from 'react';
import styles from './login-form.module.css';
import Field from './field';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // TBD: set option as theme color (lift up state)
  const [option, setSelectedOption] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    console.log({ name, email, password, option });
    window.alert('you are logged in');

    setName('');
    setEmail('');
    setPassword('');
    setSelectedOption('');
    navigate('/home');
  };

  return (
    <>
      <form className={styles['login__form']} onSubmit={handleLogin}>
        <Field
          type="text"
          id="text"
          value={name}
          label="Loved name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Field
          type="email"
          id="email"
          value={email}
          label="Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Field
          type="password"
          id="password"
          value={password}
          label="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <fieldset>
          <legend>What is your favorite color?</legend>
          <select
            name="color"
            id="color"
            onChange={(event) => setSelectedOption(event.target.value)}
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
