import React from 'react';
import cn from 'classnames';

import useWindowSize from '../hooks/useWindowSize';

import styles from './layout.module.css';

import CONST from '../constants/index';
import Sidebar from '../components/col-sidebar';
import Main from '../components/col-main';
import Extra from '../components/col-extra';

function Layout({ children }) {
  const size = useWindowSize();
  return (
    <div className={cn([styles.layout])}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>{children}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  );
}

export default Layout;
