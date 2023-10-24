import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.css';

function NavigationContainer() {
  const location = useLocation();

  return (
    <section className={styles.NavigationSection}>
      <section className={styles.NavigationInnerContainer}>
        <Link to="/swap" className={location.pathname === '/swap' ? styles.Active : ''}>
          Swap
        </Link>

        <Link to="/swap/liquidity" className={location.pathname === '/swap/liquidity' ? styles.Active : ''}>
          Liquidity
        </Link>
      </section>
    </section>
  );
}

export default NavigationContainer;
