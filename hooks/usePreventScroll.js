// hooks/usePreventScroll.js
import { useEffect } from 'react';

export function usePreventScroll(isOpen) {
  useEffect(() => {
    if (isOpen) {
      // Add class to prevent scrolling while maintaining the page's appearance
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      // Remove class when modal is closed
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      // Cleanup
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);
}