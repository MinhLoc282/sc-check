import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  ConnectDialog,
} from '@connect2ic/react';

import Header from './header/Header';

import styles from './index.module.css';

function Layout() {
  return (
    <div>
      <Header />

      <ConnectDialog />

      <div className={styles.Outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
