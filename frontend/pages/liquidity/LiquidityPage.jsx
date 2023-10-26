import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Principal } from '@dfinity/principal';
import NavigationContainer from '../../components/navigation-section/NavigationSection';
// import PairContainer from './pairContainer/PairContainer';

import styles from './index.module.css';
import { useAuth } from '../../hooks/use-auth-client';

function LiquidityPage() {
  const { swapActor, token0Actor } = useAuth();

  useEffect(() => {
    const handleTest = async () => {
      // console.log(await token0Actor.approve
      // (Principal.fromText('bd3sg-teaaa-aaaaa-qaaba-cai'), 20000));
      // const res = await swapActor.addLiquidity(
      //   Principal.fromText('be2us-64aaa-aaaaa-qaabq-cai'),
      //   Principal.fromText('br5f7-7uaaa-aaaaa-qaaca-cai'),
      //   100,
      //   100,
      //   0,
      //   0,
      //   400000000000,
      // );

      console.log(await swapActor.deposit(Principal.fromText('be2us-64aaa-aaaaa-qaabq-cai'), 15000));

      // console.log(res);
    };

    if (swapActor && token0Actor) {
      handleTest();
    }
  }, [swapActor, token0Actor]);

  return (
    <div className={styles.PageContainer}>
      <NavigationContainer />

      {/* <PairContainer /> */}

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
  );
}

export default LiquidityPage;
