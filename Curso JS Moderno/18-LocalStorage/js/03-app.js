localStorage.removeItem('nombre');

// no existe update, se podria hacer asi
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Abril');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray))

localStorage.clear();
sessionStorage.clear();