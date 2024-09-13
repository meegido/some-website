import React from 'react';
import styles from './form.module.css';

function Form({ handleLogin }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <form className={styles['login__form']} onSubmit={handleLogin}>
        <div className={styles['input']}>
          <label htmlFor="name">Preferred name</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles['input']}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles['input']}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password-input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button>Log in</button>
      </form>
    </>
  );
}

export default Form;
