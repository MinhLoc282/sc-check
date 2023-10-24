import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from '@connect2ic/core';
import { defaultProviders } from '@connect2ic/core/providers';
import {
  Connect2ICProvider,
} from '@connect2ic/react';

import { SwapProvider } from '../hooks/useSwap';

/*
 * Import canister definitions like this:
 */
import * as swap from '../../src/declarations/swap';
import * as token0 from '../../src/declarations/token0';
import * as token1 from '../../src/declarations/token1';

import { LOCATION } from '../constants';

import Layout from '../layout/Layout';
import SwapPage from '../pages/swap/SwapPage';
import LiquidityPage from '../pages/liquidity/LiquidityPage';
import AddLiquidityPage from '../pages/addLiquidity/AddLiquidityPage';

import '@connect2ic/core/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={LOCATION.SWAP} replace />}
        />

        <Route path={LOCATION.SWAP} element={<Layout />}>
          <Route index element={<SwapPage />} />

          <Route exact path={LOCATION.LIQUIDITY} element={<LiquidityPage />} />
          <Route exact path={LOCATION.ADD_LIQUIDITY} element={<AddLiquidityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const client = createClient({
  canisters: {
    swap,
    token0,
    token1,
  },
  providers: defaultProviders,
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: true,
  },
});

export default function MyApp() {
  return (
    <Connect2ICProvider client={client}>
      <SwapProvider>
        <App />
      </SwapProvider>
    </Connect2ICProvider>
  );
}
