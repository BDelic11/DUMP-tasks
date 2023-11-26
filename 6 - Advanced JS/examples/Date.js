let date1 = new Date(2023,12,10,12,20,00);
let date2 = new Date(2023,12,10,18,00,00);
let date3 = new Date(2023,2,4,11,00,00);


function DateCompare(first ,second) {

    if ((first.getFullYear() === second.getFullYear()) && (first.getMonth() === second.getMonth()) && (first.getDate() === second.getDate())) {
        
        console.log('Ova dva datuma su na isti dan!');

    } else console.log('Datumi su razliciti dan');

}

DateCompare(date1, date2);
DateCompare(date2, date3);
DateCompare(date1, date3);

console.log(date1);
console.log(date2);
