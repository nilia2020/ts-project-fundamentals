(() => {
  const login = (data: { email: string; password: string }) => {
    console.log(`email: ${data.email}, password: ${data.password}`);
  };
  login({ email: 'jorge.niglia@gmail.com', password: 'light269' });

  const products: any = [];

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
