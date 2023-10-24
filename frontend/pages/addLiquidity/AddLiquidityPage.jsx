import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Principal } from '@dfinity/principal';

import useSwap from '../../hooks/useSwap';

function AddLiquidityPage() {
  const { addLiquidity } = useSwap();

  const validation = useFormik({
    initialValues: {
      token0: '',
      token1: '',
      amount0Desired: '',
      amount1Desired: '',
      amount0Min: '',
      amount1Min: '',
      deadline: '',
    },

    validationSchema: Yup.object().shape({
      token0: Yup.string().required('Token0 is required'),
      token1: Yup.string().required('Token1 is required'),
      amount0Desired: Yup.number().required('Amount0 Desired is required'),
      amount1Desired: Yup.number().required('Amount1 Desired is required'),
      amount0Min: Yup.number().required('Amount0 Min is required'),
      amount1Min: Yup.number().required('Amount1 Min is required'),
      deadline: Yup.number().required('Deadline is required'),
    }),

    onSubmit: (values) => {
      addLiquidity(
        Principal.fromText(values.token0),
        Principal.fromText(values.token1),
        values.amount0Desired,
        values.amount1Desired,
        values.amount0Min,
        values.amount1Min,
        values.deadline,
      );
    },
  });

  return (
    <div>
      <h1>Add Liquidity</h1>
      <form onSubmit={validation.handleSubmit}>
        <div>
          <label htmlFor="token0">Token0:</label>
          <input
            type="text"
            id="token0"
            name="token0"
            onChange={validation.handleChange}
            value={validation.values.token0}
          />
          {validation.touched.token0 && validation.errors.token0 && (
            <div>{validation.errors.token0}</div>
          )}
        </div>

        <div>
          <label htmlFor="token1">Token1:</label>
          <input
            type="text"
            id="token1"
            name="token1"
            onChange={validation.handleChange}
            value={validation.values.token1}
          />
          {validation.touched.token1 && validation.errors.token1 && (
            <div>{validation.errors.token1}</div>
          )}
        </div>

        <div>
          <label htmlFor="amount0Desired">Amount0 Desired:</label>
          <input
            type="number"
            id="amount0Desired"
            name="amount0Desired"
            onChange={validation.handleChange}
            value={validation.values.amount0Desired}
          />
          {validation.touched.amount0Desired && validation.errors.amount0Desired && (
            <div>{validation.errors.amount0Desired}</div>
          )}
        </div>

        <div>
          <label htmlFor="amount1Desired">Amount1 Desired:</label>
          <input
            type="number"
            id="amount1Desired"
            name="amount1Desired"
            onChange={validation.handleChange}
            value={validation.values.amount1Desired}
          />
          {validation.touched.amount1Desired && validation.errors.amount1Desired && (
            <div>{validation.errors.amount1Desired}</div>
          )}
        </div>

        <div>
          <label htmlFor="amount0Min">Amount0 Min:</label>
          <input
            type="number"
            id="amount0Min"
            name="amount0Min"
            onChange={validation.handleChange}
            value={validation.values.amount0Min}
          />
          {validation.touched.amount0Min && validation.errors.amount0Min && (
            <div>{validation.errors.amount0Min}</div>
          )}
        </div>

        <div>
          <label htmlFor="amount1Min">Amount1 Min:</label>
          <input
            type="number"
            id="amount1Min"
            name="amount1Min"
            onChange={validation.handleChange}
            value={validation.values.amount1Min}
          />
          {validation.touched.amount1Min && validation.errors.amount1Min && (
            <div>{validation.errors.amount1Min}</div>
          )}
        </div>

        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="number"
            id="deadline"
            name="deadline"
            onChange={validation.handleChange}
            value={validation.values.deadline}
          />
          {validation.touched.deadline && validation.errors.deadline && (
            <div>{validation.errors.deadline}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddLiquidityPage;
