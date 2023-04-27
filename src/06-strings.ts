(() => {
  let productTitle = 'My amazing product'; //implicit
  // productTitle = null
  //productTitle = 123
  productTitle = 'The best product.';
  console.log('productTitle:', productTitle);
  const productDescription: string = "It's the best choice"; //explicit
  console.log('productDescription:', productDescription);
  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice} dollars
  isNew: ${isNew}
  `;

  console.log(summary);
})();
