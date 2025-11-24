'use client';

import { useEffect } from 'react';

export default function Favicon() {
  useEffect(() => {
    // Remove any existing favicon links
    const existingLinks = document.querySelectorAll('link[rel="icon"]');
    existingLinks.forEach((link) => link.remove());

    // Create light mode favicon link
    const lightLink = document.createElement('link');
    lightLink.rel = 'icon';
    lightLink.href = '/icon.svg';
    lightLink.media = '(prefers-color-scheme: light)';
    document.head.appendChild(lightLink);

    // Create dark mode favicon link
    const darkLink = document.createElement('link');
    darkLink.rel = 'icon';
    darkLink.href = '/icon-dark.svg';
    darkLink.media = '(prefers-color-scheme: dark)';
    document.head.appendChild(darkLink);

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateFavicon = () => {
      if (mediaQuery.matches) {
        lightLink.remove();
        if (!document.querySelector('link[href="/icon-dark.svg"]')) {
          document.head.appendChild(darkLink);
        }
      } else {
        darkLink.remove();
        if (!document.querySelector('link[href="/icon.svg"]')) {
          document.head.appendChild(lightLink);
        }
      }
    };

    mediaQuery.addEventListener('change', updateFavicon);
    updateFavicon(); // Set initial favicon

    return () => {
      mediaQuery.removeEventListener('change', updateFavicon);
    };
  }, []);

  return null;
}

