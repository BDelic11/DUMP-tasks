//KOLEKCIJE : SET I MAP

//ako jedinica postoji vec nece je opet dodat i mozemo razlicite vrste stavit skupa
//1. SET
const uniqueNums = new Set();

uniqueNums.add(1);
uniqueNums.add(5);
uniqueNums.add(-20);
uniqueNums.add('Test');

console.log(uniqueNums);

uniqueNums.add(1);

console.log(uniqueNums);

//vraca boolean ***has****
console.log(uniqueNums.has(5));
console.log(uniqueNums.has(0));


//iteriranje sa of ka i obcni nizovi
for (let number of uniqueNums) {
    
    console.log(number);
    
}

//spajanje dva seta u jedan
const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([1, 3, 5, 7, 9]);

let union = new Set(firstSet);
for (let element of secondSet ) {
    
    union.add(element);
    
}
console.log(union);

//union.size
console.log(union.size);

//union delete()
union.delete(3);
console.log(union);

//union.clear()
union.clear();
console.log(union);

//Prakticno ako imamo niz sa puno duplikata i zelimo maknit duplikate!!

let duplicate = [1,2,2,2,3,4,5323,543,4,3,12,543,5,1,1,11,1];
console.log(new Set(duplicate));

//ako zelimo da je set array samo radimo:(spread operator '...')

console.log([...new Set(duplicate)]);

// 2. MAP (key, value) u C#-> DICTIONARY

const map = new Map();

//map.set(), map.get(a)-> GET uzimamo iskljucivo po kljucu

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map);
console.log(map.get('a'));

//Minjanje vrijednosti! Nece duplicirat
map.set('a', 6);


//map.size(), map.has('key') PO KLJUCEVIMA!
console.log(map.has('a'));

//iteracija kroz mapu DESTRUKTURIRANJE

for([key, value] of map) {

    console.log(key + '=' + value);

}

// klase

class Person {

    #age;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#age = age;
    }

    get fullName() {
        return this.getFullName();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge () {
        return this.#age;
    }

}

let newPerson = new Person('Ivan', 'Ivanic', 15);
console.log(newPerson);
console.log(newPerson.fullName);
console.log(newPerson.age);

console.log(newPerson.getAge());