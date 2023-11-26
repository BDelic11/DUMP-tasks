let unos = prompt('Unesite ime i prezime:');

let test = 'Luka Lukic';
let test2 = 'LUKASKA lujksa';
let test3 = 'luika lijkasj';
let test4  = 'Luka lukics';

let regexUnos = /^[A-Z][a-z]*\s[A-Z][a-z]*$/;

console.log(regexUnos.test(test));
console.log(regexUnos.test(test2));
console.log(regexUnos.test(test3));
console.log(regexUnos.test(test4));

console.log(regexUnos.test(unos));