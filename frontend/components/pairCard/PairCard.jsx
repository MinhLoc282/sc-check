import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

function PairCard({ pair }) {
  const renderBigIntAsString = (bigIntValue) => bigIntValue.toString();

  return (
    <div className={styles.PairCard}>
      <div>
        {pair.id}
      </div>

      <div>
        {renderBigIntAsString(pair.kLast)}
      </div>

      <div>
        {renderBigIntAsString(pair.kLast)}
      </div>
    </div>
  );
}

PairCard.propTypes = {
  pair: PropTypes.shape({
    id: PropTypes.string.isRequired,
    token0: PropTypes.string.isRequired,
    token1: PropTypes.string.isRequired,
    creator: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        _arr: PropTypes.instanceOf(Uint8Array).isRequired,
        _isPrincipal: PropTypes.bool.isRequired,
      }),
    ]).isRequired,
    reserve0: PropTypes.any.isRequired,
    reserve1: PropTypes.any.isRequired,
    price0CumulativeLast: PropTypes.any.isRequired,
    price1CumulativeLast: PropTypes.any.isRequired,
    kLast: PropTypes.any.isRequired,
    blockTimestampLast: PropTypes.any.isRequired,
    totalSupply: PropTypes.any.isRequired,
    lptoken: PropTypes.string.isRequired,
  }).isRequired,
};

export default PairCard;
