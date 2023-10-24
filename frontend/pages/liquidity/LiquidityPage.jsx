import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useConnect } from '@connect2ic/react';

import useSwap from '../../hooks/useSwap';

import NavigationContainer from '../../components/navigation-section/NavigationSection';

function LiquidityPage() {
  const {
    getAllPairs,
  } = useSwap();

  const { principal } = useConnect();

  useEffect(() => {
    const getAllPairsHandler = async () => {
      if (principal) {
        await getAllPairs();
      }
    };

    getAllPairsHandler();
  }, [principal]);

  return (
    <div>
      <NavigationContainer />

      <div>
        Liquidity Pool

        <Link to="/swap/liquidity/add">
          Add Liquidity
        </Link>
      </div>
    </div>
  );
}

export default LiquidityPage;
