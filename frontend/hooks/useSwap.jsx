import React, {
  createContext, useContext, useMemo, useState, useEffect,
} from 'react';

import PropTypes from 'prop-types';
import { useAuth } from './use-auth-client';

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
  const { swapActor } = useAuth();

  const getUserICRC1SubAccount = async (user) => {
    const res = await swapActor.getUserICRC1SubAccount(user);
    return res;
  };

  const getPair = async (token0, token1) => {
    const res = await swapActor.getPair(token0, token1);
    return res;
  };

  const getAllPairs = async () => {
    const res = await swapActor.getAllPairs();
    return res;
  };

  const getNumPairs = async () => {
    const res = await swapActor.getNumPairs();
    return res;
  };

  const getSupportedTokenList = async () => {
    const res = await swapActor.getSupportedTokenList();
    return res;
  };

  const getUserLPBalances = async (user) => {
    const res = await swapActor.getUserLPBalances(user);
    return res;
  };

  const getUserInfo = async (user) => {
    const res = await swapActor.getUserInfo(user);
    return res;
  };

  const getSwapInfo = async () => {
    const res = await swapActor.getSwapInfo();
    return res;
  };

  const addToken = async (tokenId, tokenType) => {
    const res = await swapActor.addToken(tokenId, tokenType);
    return res;
  };

  const createPair = async (token0, token1) => {
    const res = await swapActor.createPair(token0, token1);
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
    const res = await swapActor.addLiquidity(
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
    const res = await swapActor.removeLiquidity(token0, token1, lpAmount, to, deadline);
    return res;
  };

  const deposit = async (tokenId, value) => {
    const res = await swapActor.deposit(tokenId, value);
    return res;
  };

  const depositTo = async (tokenId, to, value) => {
    const res = await swapActor.depositTo(tokenId, to, value);
    return res;
  };

  const withdraw = async (tokenId, value) => {
    const res = await swapActor.withdraw(tokenId, value);
    return res;
  };

  const withdrawTo = async (tokenId, to, value) => {
    const res = await swapActor.withdrawTo(tokenId, to, value);
    return res;
  };

  const swapExactTokensForTokens = async (amountIn, amountOutMin, path, to, deadline) => {
    const res = await swapActor.swapExactTokensForTokens(
      amountIn,
      amountOutMin,
      path,
      to,
      deadline,
    );
    return res;
  };

  const swapTokensForExactTokens = async (amountOut, amountInMax, path, to, deadline) => {
    const res = await swapActor.swapTokensForExactTokens(
      amountOut,
      amountInMax,
      path,
      to,
      deadline,
    );
    return res;
  };

  // Other functions related to tokens
  const transfer = async (tokenId, to, value) => {
    const res = await swapActor.transfer(tokenId, to, value);
    return res;
  };

  const transferFrom = async (tokenId, from, to, value) => {
    const res = await swapActor.transferFrom(tokenId, from, to, value);
    return res;
  };

  const approve = async (tokenId, spender, value) => {
    const res = await swapActor.approve(tokenId, spender, value);
    return res;
  };

  const balanceOf = async (tokenId, who) => {
    const res = await swapActor.balanceOf(tokenId, who);
    return res;
  };

  const allowance = async (tokenId, owner, spender) => {
    const res = await swapActor.allowance(tokenId, owner, spender);
    return res;
  };

  const totalSupply = async (tokenId) => {
    const res = await swapActor.totalSupply(tokenId);
    return res;
  };

  const name = async (tokenId) => {
    const res = await swapActor.name(tokenId);
    return res;
  };

  const decimals = async (tokenId) => {
    const res = await swapActor.decimals(tokenId);
    return res;
  };

  const symbol = async (tokenId) => {
    const res = await swapActor.symbol(tokenId);
    return res;
  };

  const getCallerPrincipal = async (tokenCanister) => {
    const res = await tokenCanister.getCallerPrincipal();
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
    getCallerPrincipal,
  }), [swapActor]);

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
