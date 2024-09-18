import Header from './components/header/header';
import styles from './layout.module.css';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
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
        '--color-bg': isDarkMode ? 'black' : 'white',
        '--color-text': isDarkMode ? 'white' : 'black',
      }}
    >
      <Header isDarkMode={isDarkMode} handleToggle={setIsDarkMode} />
      <main className={styles.wrapper}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
