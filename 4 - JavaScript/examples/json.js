/*let jsonPerson = '{"firstName":"Ivan", "lastName":"Bozic", "age": 29}';

let person = JSON.parse(jsonPerson);

console.log(person);

console.log(JSON.stringify(person)) ;

person.children = [
    {
        firstName: 'Ante',
        age: 20
    },
    {
        firstName: 'Ivo',
        age: 12
    }
];

console.log(JSON.stringify(person));

let personFromStorage = localStorage.getItem('person');

if (!personFromStorage) 
   localStorage.setItem('person',JSON.stringify(person)); 


localStorage.removeItem('person');
localStorage.clear();
*/

let phoneBook = [
    {
        name:'Josip',
        surname:'Josipovic',
        number: 319771
    },
    {
        name:'Karlo',
        surname:'Karlic',
        number: 318332
    },
    {
        name:'Mijo',
        surname:'Mijic',
        number: 319482
    }
];



let contactFromPhonebook = localStorage.getItem('phoneBook');
if (!contactFromPhonebook) {
    localStorage.setItem('phoneBook',JSON.stringify('phoneBook'));
}
console.log(JSON.parse(contactFromPhonebook));


/*
localStorage.setItem('phoneBook',JSON.stringify(phoneBook));


console.log(contactFromPhonebook );*/
