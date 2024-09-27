import React from 'react';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
  });

  const updateUser = (newUser) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUser,
    }));
  };

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
