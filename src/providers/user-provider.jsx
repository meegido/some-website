import React from 'react';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const updateUser = (newUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUser,
    }));
  };

  const login = (newUser) => {
    setUser(newUser);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser({
      email: '',
      username: '',
      password: '',
    });
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout, login, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
