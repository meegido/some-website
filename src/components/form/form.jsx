import React from 'react';
import styles from './form.module.css';
import Field from './field';

function Form() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [option, setSelectedOption] = React.useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    window.alert('you are logged in');
    console.log({ name, email, password, option });

    setName('');
    setEmail('');
    setPassword('');
    setSelectedOption('');
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

export default Form;
