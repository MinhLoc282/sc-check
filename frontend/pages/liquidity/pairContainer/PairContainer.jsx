import React, { useEffect, useState } from 'react';

import useSwap from '../../../hooks/useSwap';

import PairCard from '../../../components/pairCard/PairCard';

import styles from './index.module.css';

function PairContainer() {
  const {
    getAllPairs,
  } = useSwap();

  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const handleGetPairs = async () => {
      const res = await getAllPairs();
      setPairs(res);
    };

    handleGetPairs();
  }, []);

  return (
    <div className={styles.PairContainer}>
      {pairs.slice(0, 4).map((pair) => (
        <PairCard key={pair.id} pair={pair} />
      ))}
    </div>
  );
}

export default PairContainer;
