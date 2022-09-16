import React, { useState, useContext } from 'react';

import styles from './style.module.css';
import StoreContext from '../../store';

const THEME = {
  light: 'light',
  dim: 'dim',
  dark: 'dark'
};

const ThemeSelect = ({}) => {
  const store = useContext(StoreContext);

  return (
    <div className={styles.container}>
      {['light', 'dim', 'dark'].map((theme) => (
        <label key={theme} className={styles.label}>
          <input
            type="radio"
            value={theme}
            name="theme"
            checked={theme === store.theme}
            onChange={(e) => store.changeTheme(e.target.value)}
          />
          {THEME[theme]}
        </label>
      ))}
    </div>
  );
};

export default ThemeSelect;
