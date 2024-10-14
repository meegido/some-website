import styles from './layout.module.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './providers/theme-provider';
import Header from './components/shared/header/header';

const Layout = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <Header />
      <main className={styles.wrapper} data-theme={theme}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
