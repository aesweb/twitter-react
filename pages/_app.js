import React, { useState, useEffect } from 'react';

import '../styles/app.css';
import StoreContext from '../store';

export default function MyApp({ Component, pageProps }) {
  const [theme, themeSet] = useState(null);

  useEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light';
    themeSet(theme);
  });

  const changeTheme = (theme) => {
    themeSet(theme);
    localStorage.setItem('THEME', theme);
  };

  useEffect(() => {
    if (!theme) return;
    const $html = document.querySelector('html');
    $html.classList.remove(...$html.classList);
    $html.classList.add(theme);
  }, [theme]);

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}
