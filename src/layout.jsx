import Header from './components/header/header';
import styles from './layout.module.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './providers/theme-provider';
import { UserContext } from './providers/user-provider';

const Layout = () => {
  const { theme } = React.useContext(ThemeContext);
  const { user, handleUserChange } = React.useContext(UserContext);

  console.log(theme, 'layout');
  return (
    <>
      <Header />
      <main className={styles.wrapper} data-theme={theme}>
        <Outlet context={{ user, handleUserChange }} />
      </main>
    </>
  );
};

export default Layout;
