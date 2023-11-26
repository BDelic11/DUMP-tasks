

let phoneBook = [
    {
        firstName: 'Bruno',
        lastName: 'Delic',
        age: 22,
        phoneNum: 0956456433 
    },

    {
        firstName: 'Luka',
        lastName: 'Lukic',
        age: 13,
        phoneNum: 0983423423 
    },

    {
        firstName: 'Ines',
        lastName: 'Inic',
        age: 32 ,
        phoneNum: 0934234234 
    },

    {
        firstName: 'Ante',
        lastName: 'Antic',
        age: 34,
        phoneNum: 093423234 
    }
]

console.log(phoneBook);

let phoneBookStorage = localStorage.getItem('phoneBook');

if (!phoneBookStorage) {
    localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
}

console.log(phoneBook);
console.log(phoneBookStorage);

console.log(JSON.parse(phoneBookStorage));

