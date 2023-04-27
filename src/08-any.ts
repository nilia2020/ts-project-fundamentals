(() => {
  let myDynamicVar: any;
  myDynamicVar = 13;
  myDynamicVar = null;
  myDynamicVar = 'hola';
  myDynamicVar = {};

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);
  myDynamicVar = 1125;
  const rta2 = (<number>myDynamicVar).toFixed(2);
  console.log(rta2);
})();
