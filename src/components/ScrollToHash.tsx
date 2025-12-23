import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_OFFSET = 80;

const scrollWithOffset = (element: HTMLElement) => {
  const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
};

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        scrollWithOffset(element);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToHash;
