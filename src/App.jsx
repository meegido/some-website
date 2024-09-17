import Header from './components/header/header';
import styles from './app.module.css';
import LoginForm from './components/form/login-form';
import React from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(
    () => JSON.parse(window.localStorage.getItem('is-dark-mode')) || false
  );

  React.useEffect(() => {
    window.localStorage.setItem('is-dark-mode', isDarkMode);

    return () => window.localStorage.removeItem('is-dark-mode');
  }, [setIsDarkMode]);

  console.log(isDarkMode, 'app');

  return (
    <div
      style={{
        // NOTE: This is a just-for-fun mini demo, not a
        // full-featured Dark Mode implementation!
        '--color-bg': isDarkMode ? 'white' : 'black',
        '--color-text': isDarkMode ? 'black' : 'white',
      }}
    >
      <Header isDarkMode={isDarkMode} handleToggle={setIsDarkMode} />
      <main className={styles.wrapper}>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
