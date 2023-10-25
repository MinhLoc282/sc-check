import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Principal } from '@dfinity/principal';

import useSwap from '../../hooks/useSwap';

import NavigationContainer from '../../components/navigation-section/NavigationSection';
import SelectTokenModal from './SelectTokenModal/SelectTokenModal';

import { calculateAmount0Desired, calculateAmount1Desired } from '../../utils';

import styles from './index.module.css';

function AddLiquidityPage() {
  const { getPair, addLiquidity } = useSwap();
  const navigation = useNavigate();

  const [price, setPrice] = useState();
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const [selectedToken0Name, setSelectedToken0Name] = useState('');
  const [selectedToken1Name, setSelectedToken1Name] = useState('');
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [selectedTokenIdentifier, setSelectedTokenIdentifier] = useState('');

  const openTokenModal = (token) => {
    setSelectedTokenIdentifier(token);
    setIsTokenModalOpen(true);
  };

  const closeTokenModal = () => {
    setIsTokenModalOpen(false);
  };

  const handleGoBack = () => {
    navigation('/swap/liquidity');
  };

  const handleClearForm = () => {
    validation.resetForm();
    setPriceMin('');
    setPriceMax('');
  };

  const handleSelectFullRange = () => {
    setPriceMin(0);
    setPriceMax(Infinity);
  };

  const handleToken0Change = (o) => {
    setSelectedToken0Name(o.symbol);
    validation.setFieldValue('token0', o.id);

    if (o.symbol === selectedToken1Name) {
      setSelectedToken0Name(o.symbol);
      setSelectedToken1Name('');
      validation.setFieldValue('token0', o.id);
    }
  };

  const handleToken1Change = (o) => {
    setSelectedToken1Name(o.symbol);
    validation.setFieldValue('token1', o.id);

    if (o.symbol === selectedToken0Name) {
      setSelectedToken0Name(o.symbol);
      setSelectedToken1Name('');
      validation.setFieldValue('token0', o.id);
    }
  };

  const getPriceFromPair = async (token0, token1) => {
    const pairinfo = await getPair(Principal.fromText(token0), Principal.fromText(token1));
    const res0 = pairinfo.reserve0 * (10 ** 18);
    const rls = (1 * res0) / pairinfo.reserve1 / (10 ** 18);
    setPrice(parseFloat(rls));
  };

  const validation = useFormik({
    initialValues: {
      token0: '',
      token1: '',
      amount0Desired: '',
      amount1Desired: '',
    },

    validationSchema: Yup.object().shape({
      token0: Yup.string().required('Token0 is required'),
      token1: Yup.string().required('Token1 is required'),
      amount0Desired: Yup.string().required('Amount0 Desired is required'),
      amount1Desired: Yup.string().required('Amount1 Desired is required'),
    }),

    onSubmit: (values) => {
      const timestamp = Math.floor(new Date().getTime() / 1000) + 600;

      addLiquidity(
        Principal.fromText(values.token0),
        Principal.fromText(values.token1),
        values.amount0Desired,
        values.amount1Desired,
        0,
        0,
        timestamp,
      );
    },
  });

  useEffect(() => {
    if (!Number.isNaN(validation.values.amount0Desired)
    && !Number.isNaN(price)
    && !Number.isNaN(priceMin)
    && !Number.isNaN(priceMax)) {
      const newAmount1Desired = calculateAmount1Desired(
        validation.values.amount0Desired,
        price,
        priceMin,
        priceMax,
      );

      validation.setFieldValue('amount1Desired', newAmount1Desired);
    }
  }, [validation.values.amount0Desired, price, priceMin, priceMax]);

  useEffect(() => {
    if (!Number.isNaN(validation.values.amount1Desired)
    && !Number.isNaN(price)
    && !Number.isNaN(priceMin)
    && !Number.isNaN(priceMax)) {
      const newAmount0Desired = calculateAmount0Desired(
        validation.values.amount1Desired,
        price,
        priceMin,
        priceMax,
      );

      validation.setFieldValue('amount0Desired', newAmount0Desired);
    }
  }, [validation.values.amount1Desired, price, priceMin, priceMax]);

  useEffect(() => {
    if (validation.values.token0 && validation.values.token1) {
      getPriceFromPair(validation.values.token0, validation.values.token1);
      setPriceMin(price - price / 2);
      setPriceMax(price * 2);
    }
  }, [validation.values.token0, validation.values.token1]);

  useEffect(() => {
    setPriceMin(price - price / 2);
    setPriceMax(price * 2);
  }, [price]);

  return (
    <div className={styles.PageContainer}>
      <NavigationContainer />

      <div className={styles.CardContainer}>
        <div className={styles.TitleContainer}>
          <button type="button" onClick={() => handleGoBack()}>&lt;</button>
          <h1>Add Liquidity</h1>
          <button type="button" onClick={() => handleClearForm()}>Clear All</button>
        </div>

        <form onSubmit={validation.handleSubmit}>
          <div className={styles.LeftContainer}>
            <div className={styles.PairSelection}>
              <h2>Select Pair</h2>
              <div className={styles.TokenContainer}>
                {/* <select
                  id="token0"
                  name="token0"
                  onChange={handleToken0Change}
                  onBlur={validation.handleBlur}
                  value={selectedToken0Name}
                >
                  <option value="" disabled hidden>Select a token</option>
                  {Object.keys(tokenMap).map((tokenName) => (
                    <option key={tokenName} value={tokenName}>
                      {tokenName}
                    </option>
                  ))}
                </select>

                <select
                  id="token1"
                  name="token1"
                  onChange={handleToken1Change}
                  onBlur={validation.handleBlur}
                  value={selectedToken1Name}
                >
                  <option value="" disabled hidden>Select a token</option>
                  {Object.keys(tokenMap).map((tokenName) => (
                    <option key={tokenName} value={tokenName}>
                      {tokenName}
                    </option>
                  ))}
                </select> */}

                <button type="button" onClick={() => openTokenModal('0')}>
                  {selectedToken0Name || 'Select Token 0'}
                </button>

                <button type="button" onClick={() => openTokenModal('1')}>
                  {selectedToken1Name || 'Select Token 1'}
                </button>
              </div>
            </div>

            <div className={styles.DepositAmounts}>
              <h2>Deposit Amounts</h2>

              <div>
                <label htmlFor="amount0Desired">
                  {selectedToken0Name}
                </label>

                <input
                  type="number"
                  id="amount0Desired"
                  name="amount0Desired"
                  placeholder="0.0"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.amount0Desired || 0}
                />
                {validation.touched.amount0Desired && validation.errors.amount0Desired && (
                <div>{validation.errors.amount0Desired}</div>
                )}
                <p>Balance: 0</p>
              </div>

              <div>
                <label htmlFor="amount1Desired">
                  {selectedToken1Name}
                </label>

                <input
                  type="number"
                  id="amount1Desired"
                  name="amount1Desired"
                  placeholder="0.0"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.amount1Desired || 0}
                />
                {validation.touched.amount1Desired && validation.errors.amount1Desired && (
                <div>{validation.errors.amount1Desired}</div>
                )}
                <p>Balance: 0</p>
              </div>
            </div>
          </div>

          <div className={styles.RightContainer}>
            <div className={styles.PriceRange}>
              <h2>Set Price Range</h2>
              <p>
                Current Price:
                {' '}
                {price}
                {' '}
                <span>
                  {selectedToken1Name || '--'}
                  {' '}
                  per
                  {' '}
                  {selectedToken0Name}
                </span>
              </p>
              <input
                type="number"
                name="minPrice"
                placeholder="Min Price"
                value={priceMin || 0}
                onChange={(e) => setPriceMin(parseFloat(e.target.value))}
              />

              <input
                type="number"
                name="maxPrice"
                placeholder="Max Price"
                value={priceMax || 0}
                onChange={(e) => setPriceMax(parseFloat(e.target.value))}
              />

              <button type="button" onClick={() => handleSelectFullRange()}>Full Range</button>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <SelectTokenModal
        isTokenModalOpen={isTokenModalOpen}
        closeTokenModal={closeTokenModal}
        handleToken0Change={handleToken0Change}
        handleToken1Change={handleToken1Change}
        selectedTokenIdentifier={selectedTokenIdentifier}
      />
    </div>
  );
}

export default AddLiquidityPage;
