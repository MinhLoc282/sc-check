export const calculateAmount0Desired = (
  amount1Desired,
  currPrice,
  priceLower,
  priceHigher,
) => {
  const L = amount1Desired / (Math.sqrt(currPrice) - Math.sqrt(priceLower));
  const amount0Desired = (L * (Math.sqrt(priceHigher) - Math.sqrt(currPrice)))
  / (Math.sqrt(currPrice) * Math.sqrt(priceHigher));

  return amount0Desired;
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

  return amount1Desired;
};
