import React from 'react'

const useIsOnTop = () => {
    const [isTop, setIsTop] = React.useState(true);

    React.useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsTop(scrollTop <= 20);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return isTop
}

export default useIsOnTop