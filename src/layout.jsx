import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './providers/theme-provider';
import Header from './shared/components/header/header';

const Layout = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <Header />
      <main data-theme={theme}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
