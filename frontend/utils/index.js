export const calculateAmount0Desired = (
  amount1Desired,
  currPrice,
  priceLower,
  priceHigher,
) => {
  const L = amount1Desired / (Math.sqrt(currPrice) - Math.sqrt(priceLower));
  const amount0Desired = (L * (Math.sqrt(priceHigher) - Math.sqrt(currPrice)))
  / (Math.sqrt(currPrice) * Math.sqrt(priceHigher));

  return Math.round(amount0Desired);
};

export const calculateAmount1Desired = (
  amount0Desired,
  currPrice,
  priceLower,
  priceHigher,
) => {
  const L = (amount0Desired * Math.sqrt(currPrice) * Math.sqrt(priceHigher))
            / (Math.sqrt(priceHigher) - Math.sqrt(currPrice));
  const amount1Desired = L * (Math.sqrt(currPrice) - Math.sqrt(priceLower));

  return Math.round(amount1Desired);
};

export const getPriceFromPair = async (swapActor, token0, token1) => {
  const pairinfo = await swapActor.getPair(
    token0,
    token1,
  );

  const res0 = Number(pairinfo[0].reserve0) * (10 ** 18);
  const rls = (1 * res0) / Number(pairinfo[0].reserve1) / (10 ** 18);
  return (parseFloat(rls));
};
