import React from 'react';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(() => {
    return window.localStorage.getItem('color-theme') || 'light';
  });

  React.useEffect(() => {
    window.localStorage.setItem('color-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    setTheme((currentTheme) => {
      return currentTheme === 'light' ? 'dark' : 'light';
    });
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
