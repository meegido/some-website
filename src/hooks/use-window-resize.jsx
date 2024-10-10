import React from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(() => {
    return window.innerWidth < 768;
  });

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
