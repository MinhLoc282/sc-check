import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

function PairCard({ pair }) {
  return (
    <div className={styles.PairCard}>
      <div>
        {pair.id}
      </div>

      <div>
        {pair.kLast}
      </div>

      <div>
        {pair.totalSupply}
      </div>
    </div>
  );
}

PairCard.propTypes = {
  pair: PropTypes.shape({
    id: PropTypes.string.isRequired,
    token0: PropTypes.string.isRequired,
    token1: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    reserve0: PropTypes.number.isRequired,
    reserve1: PropTypes.number.isRequired,
    price0CumulativeLast: PropTypes.number.isRequired,
    price1CumulativeLast: PropTypes.number.isRequired,
    kLast: PropTypes.number.isRequired,
    blockTimestampLast: PropTypes.number.isRequired,
    totalSupply: PropTypes.number.isRequired,
    lptoken: PropTypes.string.isRequired,
  }).isRequired,
};

export default PairCard;
