/*let today = new Date();
console.log(today);

let myBirthday = new Date(2000, 11, 16);
console.log(myBirthday);

myBirthday = new Date('2000-12-16 20:50:00.00')


console.log(myBirthday.getMonth());
console.log(myBirthday.getDay());
console.log(myBirthday.getDate());
console.log(myBirthday.getFullYear());
console.log(myBirthday.getTimezoneOffset());

console.log(myBirthday.getTime());

console.log(today.toString());
console.log(today.toUTCString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleString());*/

let date1 = new Date('2000-12-16 12:40:00');
let date2 = new Date('2000-12-16 18:40:00');
let date3 = new Date('2000-12-30 08:40:00');

console.log(date1);
console.log(date2);
console.log(date3);

const dates = [date1, date2, date3];

function DateTester(date1, date2) {
    if (date1.getDate() === date2.getDate()) {
        console.log('ISTI DAN');
    } else console.log('Drugi dan.');


}

DateTester(date1, date2);
DateTester(date1, date3);
DateTester(date2, date3);