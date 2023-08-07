import React, { useEffect, useState } from 'react'

const useScroll = () => {

    const [scrollTop, setScrollTop] = useState(false);
    

    useEffect(() => {
        const handleScroll = event => {
        if(window.scrollY> 280)
          setScrollTop(true);
          else 
          setScrollTop(false);

        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return scrollTop
}

export default useScroll