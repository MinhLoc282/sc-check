import React from 'react';
import { Link } from 'react-router-dom';

import NavigationContainer from '../../components/navigation-section/NavigationSection';
import PairContainer from './pairContainer/PairContainer';

import styles from './index.module.css';

function LiquidityPage() {
  return (
    <div className={styles.PageContainer}>
      <NavigationContainer />

      <div className={styles.LiquidityOuterContainer}>
        <PairContainer />

        <div className={styles.LiquidityContainer}>
          <div className={styles.CardContainer}>
            <div className={styles.Title}>
              Liquidity Pool
            </div>

            <Link to="/swap/liquidity/add">
              Add Liquidity
            </Link>
          </div>

          <div className={styles.PositionContainer}>
            <div className={styles.LeftContainer}>
              <div className={styles.Title}>
                Your Positions
              </div>

              <div className={styles.Subtitle}>
                Total Value: --
              </div>
            </div>

            <div className={styles.RightContainer}>
              <label htmlFor="checkbox">
                Show closed positions
                <input id="checkbox" type="checkbox" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiquidityPage;
