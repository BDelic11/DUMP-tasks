
let i = 0;

setInterval(() => {
    console.log(i);
    i++;
}, 1000);


let intervalId = setInterval(() => {    
    
   const promise1= new Promise((resolve) => {
        const hours = new Date().getHours();
        setTimeout(resolve, 1000, hours);
    });

   const promise2 = new Promise((resolve) => {
        const min = new Date().getMinutes();
        setTimeout(resolve, 1000, min);
    });

   const promise3 = new Promise((resolve) => {
        const sec = new Date().getSeconds();
        setTimeout(resolve, 1000, sec);
    });
    
    Promise.all([promise1, promise2, promise3]).then((value) => {
        console.log(`${value[0]}:${value[1]}:${ value[2]}`);
    })

}, 3000);

setTimeout(() => {
    clearInterval(intervalId);
}, 10000);