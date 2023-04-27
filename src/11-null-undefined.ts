(() => {
  //TypeScript
  let myVar = null; //Tipo any
  let otherVar = undefined; //Tipo any

  let myNull: null = null; // Tipo null
  let myUndefined: undefined = undefined; //Tipo undefined

  let myNumber: number | null = null;
  myNumber = 50;

  let myString: string | undefined = undefined;
  myString = 'Hola TypeScript';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'Nobody';
    }
    console.log(hello);
  }
  hi('Fabio');
  hi(null);
  function hi2(name: string | null) {
    let hello = 'Hola ';
    //optional chaining
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  hi2('Fabio');
  hi2(null);

  function hi3(name: string | null) {
    let hello: string = 'Hello ';
    //nullish coalescing operator
    hello += name?.toUpperCase() ?? 'NOBODY';
    console.log(hello);
  }

  hi3('Fabio');
  hi3(null);
})();
