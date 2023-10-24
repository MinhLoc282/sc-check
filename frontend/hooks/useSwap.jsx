import React, {
  createContext, useContext, useMemo,
} from 'react';

import PropTypes from 'prop-types';

import { useCanister } from '@connect2ic/react';

const SwapContext = createContext({
  getUserICRC1SubAccount: async () => {},
  getPair: async () => {},
  getAllPairs: async () => {},
  getNumPairs: async () => {},
  getSupportedTokenList: async () => {},
  getUserLPBalances: async () => {},
  getUserInfo: async () => {},
  getSwapInfo: async () => {},
  addToken: async () => {},
  createPair: async () => {},
  addLiquidity: async () => {},
  removeLiquidity: async () => {},
  deposit: async () => {},
  depositTo: async () => {},
  withdraw: async () => {},
  withdrawTo: async () => {},
  swapExactTokensForTokens: async () => {},
  swapTokensForExactTokens: async () => {},
  transfer: async () => {},
  transferFrom: async () => {},
  approve: async () => {},
  balanceOf: async () => {},
  allowance: async () => {},
  totalSupply: async () => {},
  name: async () => {},
  decimals: async () => {},
  symbol: async () => {},
});

export function SwapProvider({ children }) {
  const [swap] = useCanister('swap');

  const getUserICRC1SubAccount = async (user) => {
    const res = await swap.getUserICRC1SubAccount(user);
    return res;
  };

  const getPair = async (token0, token1) => {
    const res = await swap.getPair(token0, token1);
    return res;
  };

  const getAllPairs = async () => {
    const res = await swap.getAllPairs();
    return res;
  };

  const getNumPairs = async () => {
    const res = await swap.getNumPairs();
    return res;
  };

  const getSupportedTokenList = async () => {
    const res = await swap.getSupportedTokenList();
    return res;
  };

  const getUserLPBalances = async (user) => {
    const res = await swap.getUserLPBalances(user);
    return res;
  };

  const getUserInfo = async (user) => {
    const res = await swap.getUserInfo(user);
    return res;
  };

  const getSwapInfo = async () => {
    const res = await swap.getSwapInfo();
    return res;
  };

  const addToken = async (tokenId, tokenType) => {
    const res = await swap.addToken(tokenId, tokenType);
    return res;
  };

  const createPair = async (token0, token1) => {
    const res = await swap.createPair(token0, token1);
    return res;
  };

  const addLiquidity = async (
    token0,
    token1,
    amount0Desired,
    amount1Desired,
    amount0Min,
    amount1Min,
    deadline,
  ) => {
    const res = await swap.addLiquidity(
      token0,
      token1,
      amount0Desired,
      amount1Desired,
      amount0Min,
      amount1Min,
      deadline,
    );
    return res;
  };

  const removeLiquidity = async (token0, token1, lpAmount, to, deadline) => {
    const res = await swap.removeLiquidity(token0, token1, lpAmount, to, deadline);
    return res;
  };

  const deposit = async (tokenId, value) => {
    const res = await swap.deposit(tokenId, value);
    return res;
  };

  const depositTo = async (tokenId, to, value) => {
    const res = await swap.depositTo(tokenId, to, value);
    return res;
  };

  const withdraw = async (tokenId, value) => {
    const res = await swap.withdraw(tokenId, value);
    return res;
  };

  const withdrawTo = async (tokenId, to, value) => {
    const res = await swap.withdrawTo(tokenId, to, value);
    return res;
  };

  const swapExactTokensForTokens = async (amountIn, amountOutMin, path, to, deadline) => {
    const res = await swap.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline);
    return res;
  };

  const swapTokensForExactTokens = async (amountOut, amountInMax, path, to, deadline) => {
    const res = await swap.swapTokensForExactTokens(amountOut, amountInMax, path, to, deadline);
    return res;
  };

  // Other functions related to tokens
  const transfer = async (tokenId, to, value) => {
    const res = await swap.transfer(tokenId, to, value);
    return res;
  };

  const transferFrom = async (tokenId, from, to, value) => {
    const res = await swap.transferFrom(tokenId, from, to, value);
    return res;
  };

  const approve = async (tokenId, spender, value) => {
    const res = await swap.approve(tokenId, spender, value);
    return res;
  };

  const balanceOf = async (tokenId, who) => {
    const res = await swap.balanceOf(tokenId, who);
    return res;
  };

  const allowance = async (tokenId, owner, spender) => {
    const res = await swap.allowance(tokenId, owner, spender);
    return res;
  };

  const totalSupply = async (tokenId) => {
    const res = await swap.totalSupply(tokenId);
    return res;
  };

  const name = async (tokenId) => {
    const res = await swap.name(tokenId);
    return res;
  };

  const decimals = async (tokenId) => {
    const res = await swap.decimals(tokenId);
    return res;
  };

  const symbol = async (tokenId) => {
    const res = await swap.symbol(tokenId);
    return res;
  };

  const contextValue = useMemo(() => ({
    getUserICRC1SubAccount,
    getPair,
    getAllPairs,
    getNumPairs,
    getSupportedTokenList,
    getUserLPBalances,
    getUserInfo,
    getSwapInfo,
    addToken,
    createPair,
    addLiquidity,
    removeLiquidity,
    deposit,
    depositTo,
    withdraw,
    withdrawTo,
    swapExactTokensForTokens,
    swapTokensForExactTokens,
    transfer,
    transferFrom,
    approve,
    balanceOf,
    allowance,
    totalSupply,
    name,
    decimals,
    symbol,
  }), []);

  return (
    <SwapContext.Provider
      value={contextValue}
    >
      { children }
    </SwapContext.Provider>
  );
}

SwapProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useSwap = () => useContext(SwapContext);

export default useSwap;
