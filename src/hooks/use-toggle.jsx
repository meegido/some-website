import React from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = React.useState(initialValue);

  if (typeof initialValue !== 'boolean' && typeof initialValue !== 'function') {
    console.warn('Invalid type for useToggle');
  }

  const toggleValue = () => {
    setValue((currentValue) => !currentValue);
  };

  return [value, toggleValue];
};

export default useToggle;
