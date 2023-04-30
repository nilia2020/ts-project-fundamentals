(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`Total: ${rta}`);
  };

  const rta = calcTotal([1, 2, 1, 2, 1]);
  console.log(rta);
  printTotal([1, 2, 1, 2, 1]);
})();
