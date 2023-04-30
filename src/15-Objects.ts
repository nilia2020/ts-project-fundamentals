(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];
  const addProduct = (data: Product): void => {
    products.push(data);
  };
  addProduct({
    title: 'Producto 1',
    createdAt: new Date(2023, 4, 30),
    stock: 65,
  });
  addProduct({
    title: 'Producto 2',
    createdAt: new Date(2023, 1, 8),
    stock: 56,
    size: 'S',
  });
  console.log(products);
})();
