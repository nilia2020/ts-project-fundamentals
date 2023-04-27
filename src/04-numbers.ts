(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;

  customerAge = customerAge + 1;

  //customerAge = customerAge + '1';
  console.log('customerAge', customerAge);

  let ProductInStock: number;

  console.log('ProductInStock', ProductInStock);
  if (ProductInStock > 10) {
    console.log('Is greater tha 10');
  }
  let discount = parseInt('100');

  console.log('discount', discount);

  if (discount < 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0x2ff;

  console.log('hexadecimal', hex);

  let bin = 0b1010;

  console.log('binario', bin);

  const myNumber: number = 10;
})();
