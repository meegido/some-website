import React from 'react';

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
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
