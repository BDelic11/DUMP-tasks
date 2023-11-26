// callback funkcija je funkija koja se salje kao parametar drugoj funkciji
// asinkrona programiranje -> poziva te nakon sta se nesto zavrsilo izvrsavat 
// js singlethread jezik , razlicito paralelno(multithreading) i asinkrono

function myDisplayer(sum) {

     console.log(sum);
}

function myCalculator(num1, num2, myCallback){

   let sum = num1 +num2;
   myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// nakon koliko zelimo da se dogodi funkcija u milisekundama(1000)
// kad trebamo pricekat da se dogodi pa tek onda se ispise

console.log('test');

// prva funkcija u asinkronom koju koristimo je 'setTimeout'
setTimeout(() => {
   for (let i = 0; i < 100; i++) {
      console.log(Math.pow(i,2));    
   }
   console.log('Kraj');
}, 1000);

console.log('test2');

//
let startTime = performance.now();
setTimeout(() => {
   let endTime = performance.now();
   console.log('elapsed: ', endTime - startTime);
   for (let i = 0; i < 100; i++) {
      console.log(Math.pow(i,2)); 
   }
   console.log('Kraj2');
}, 0);

console.log('test3'); 

// druga koju mozemo je 'setInterval'
// razlika je sta se ne odradi jednom nego se ponavlja svako milisek koji odredimo (u nasem slucaju svake 3 sek)

let intervalId = setInterval(() => {
   let today = new Date();
   console.log(`Current time is: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
}, 3000);

//clearInterval ce zaustavit interval nakon odredenog vrimena 
setTimeout(() => {
   clearInterval(intervalId);
}, 10000);

// ove funckije sta smo koristili koriste se samo kad unutar aplikacije nesto pozivamo
// pa nije preveliko vrijeme dok dode informacija , ako tribamo pozivat na API triba malo
// vise vrimena pa koristimo druge metode 

// PROMISE -> objekt koji prati stanje asinkronog izvrsavanja i javi kad zavrsi odnosno zapne
// ima dva smjera: izvrseno i neizvrseno