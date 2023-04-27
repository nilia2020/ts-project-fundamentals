(() => {
  let prices = [1, 2, 2, 1, 212, 'hola', true];

  //prices.push('as')
  //prices.push(true)
  //prices.push({})
  prices.push(123);
  prices = [1, 2, 3];

  let products: (number | string | boolean | object)[] = ['hola', true];
  products.push(12);
  products.push(false);
  console.log(products);
  let numbers = [1, 2, 3, 5, 8, 13];
  console.log(
    numbers.map(
      (num, index) =>
        num +
        (index != numbers.length - 1 ? numbers[index + 1] : numbers[index])
    )
  );
})();
