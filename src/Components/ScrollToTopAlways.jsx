import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTopAlways() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  
  return null;
}


// URL: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition