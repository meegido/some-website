import React from 'react';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(() => {
    const storedUser = window.localStorage.getItem('user');
    return storedUser
      ? JSON.parse(storedUser)
      : {
          username: '',
          email: '',
          password: '',
        };
  });

  const [isLoggedIn, setIsLoggedIn] = React.useState(() => {
    const storedUser = window.localStorage.getItem('user');
    return storedUser && storedUser.username !== '' && user.email !== '' && user.password !== '';
  });

  const updateUser = (newUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUser,
    }));
  };

  const login = (newUser) => {
    setUser(newUser);
    setIsLoggedIn(true);

    window.localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser({
      email: '',
      username: '',
      password: '',
    });
    setIsLoggedIn(false);
    window.localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout, login, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
