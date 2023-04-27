(() => {
  const myCart = [];
  type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updateAt: Date;
    category: {
      id: number;
      name: string;
      image: string;
      creationAt: Date;
      updateAt: Date;
    };
  };
  let products: Product[] = [];
  const limit = 2;
  const url = 'http://api.escuelajs.co/api/v1/products';

  async function getProducts() {
    const rta = await fetch(url, {
      method: 'GET',
    });
    const data = await rta.json();
    products.concat(data);
  }

  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price;
    }
    return total;
  }
  function addProduct(index: number) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina',
  };
  const rta = `${person.name} + ${limit}`;
  console.log(rta);
  console.log(products);
})();
