(() => {
  let suma = 0;
  const myFunc = (a: number, b: number) => a + b;
  console.log((suma = myFunc(3, 5)));

  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProductJson('Prod 1', new Date(), 12, 'XL');
  console.log('producto 1: ', product1);
  console.log('stock: ', product1.stock);

  type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
  const createProductToJSON = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: ShirtSizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };
  const product2 = createProductToJSON('Prod 2', new Date(), 14, 'L');
  console.log('producto 2: ', product2);
  console.log('size: ', product2.size);
})();
