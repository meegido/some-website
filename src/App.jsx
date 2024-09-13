import Header from './components/header/header';
import styles from './app.module.css';
import LoginForm from './components/form/login-form';
import React from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleDarkMode = () => {
    !isDarkMode ? setIsDarkMode(true) : setIsDarkMode(false);
  };

  return (
    <div
      style={{
        // NOTE: This is a just-for-fun mini demo, not a
        // full-featured Dark Mode implementation!
        '--color-bg': isDarkMode ? '#f8f8e0' : 'white',
        '--color-text': isDarkMode ? 'black' : 'black',
      }}
    >
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <main className={styles.wrapper}>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
