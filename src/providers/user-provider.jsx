import React from 'react';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleUserChange = (event) => {
    const eventName = event.target.name;
    const eventValue = event.target.value;
    setUser({
      ...user,
      [eventName]: eventValue,
    });
  };

  return <UserContext.Provider value={{ user, handleUserChange }}>{children}</UserContext.Provider>;
};

export default UserProvider;
