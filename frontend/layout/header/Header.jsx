import React from 'react';

import {
  ConnectButton,
} from '@connect2ic/react';

import styles from './index.module.css';

function Header() {
  return (
    <div className={styles.AuthSection}>
      <ConnectButton />
    </div>
  );
}

export default Header;
