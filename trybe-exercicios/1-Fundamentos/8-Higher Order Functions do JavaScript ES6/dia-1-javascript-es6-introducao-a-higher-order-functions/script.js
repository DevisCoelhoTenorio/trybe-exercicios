const acordar = () => 'Acordando!!';

const comer = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingtThings = (func) => {
  const result = func();
  console.log(result);
}

doingtThings(acordar);
doingtThings(comer);
doingtThings(dormir);