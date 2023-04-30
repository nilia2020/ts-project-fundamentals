import { addProduct, calcStock, products } from './product.service';

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
const total = calcStock();

console.log('Stock: ', total);
