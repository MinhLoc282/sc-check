import React from 'react';

import { useAuth } from '../../hooks/use-auth-client';

import LoggedIn from '../../components/LoggedStatus/LoggedIn';
import LoggedOut from '../../components/LoggedStatus/LoogedOut';

import styles from './index.module.css';

function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.AuthSection}>
      {isAuthenticated ? <LoggedIn /> : <LoggedOut />}
    </div>
  );
}

export default Header;
