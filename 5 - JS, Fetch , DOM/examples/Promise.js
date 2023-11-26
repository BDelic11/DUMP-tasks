
// resolve i reject su funkc ili callbackovi koji ce se izvrsit ako se 'uspije' odnosno 'ne uspije' izvrsit PROMISE
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let seconds = new Date().getSeconds();
        if (seconds % 2 == 0) {
            resolve(seconds);
        }
       reject(seconds);
    }, 100);
});

// kad napravimo ovo gore nista se ne dogada dok ne napisemo myPromise.then()
// then moze primit 2 funkcije prva se izvrsi kod resolva a druga kod rejecta

// ->  myPromise.then(data => console.log('resolve', data), data => console.log('reject', data));

// parametar data mozemo nazvat kako god hocemo nemora bit data

// Drugi nacin pisanja ovoga je preko CATCHA
// ne odvajamo zarezom nego pisemo '.catch()' kada eksplicitno pisemo slucaj REJECTA!
// -> myPromise.then(data => console.log('resolve', data).catch(data => console.log('reject', data)));

const myPromise2 = new Promise((resolve) => resolve());

myPromise2.then(() => {
    throw 'error';
}).catch(() => {
    console.log('In catch');
});

myPromise
.then(value => {return value + 'a'})
.then(value => {return value + 'b'})
.then(value => {return value + 'c'})
.then(value => { console.log(value) })
.catch(error => {console.log(error) });

//3 nacina pisanja promisa:
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'foo');
});

//promise koristimo kad cekamo da se sve to obavi dok dalje obavljamo i onda kad dobije rezultat izvrsi se 

// iniciramo sva 3 odjednom tek kad sva tri zavrse nastavljamo radit 'PROMISE.all()' prima array promisova koji se tribaju ispunit
// prije nego krene u 'then'
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});


// PROMISE.race() -> prima niz promisa i uzima samo onoga koji se BRZE izvrsi
const race1 = new Promise((resolve) => {
    setTimeout(resolve, 500, 'one');
});

const race2 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([race1, race2]).then((value) => {
    console.log(value);
});