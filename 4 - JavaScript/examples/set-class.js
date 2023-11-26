/*const uniqueNums = new Set();

uniqueNums.add(1);
uniqueNums.add(3);
uniqueNums.add(5);
uniqueNums.add('Hello');

console.log(uniqueNums);

const Set1 = new Set([1, 3, 5, 7]);
const Set2 = new Set([1, 2, 4, 6, 7, 1]);

console.log(Set1);
console.log(Set2);

const union = new Set(Set1);
for (let element of Set2)
    union.add(element);

console.log(union);
console.log(union.delete(3));
console.log(union);
console.log(union.has(1));

console.log(union.size);
console.log(union.clear);

console.log(union);

let duplicates = [1, 1, 2, 4, 5, 6, 6, 78, 5678, 4, 5, 5, 5, 44, 3, 1];
console.log(...new Set(duplicates));
console.log(duplicates);
console.log(new Set(duplicates));
*/

const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

console.log(map);
console.log(map.size);
console.log(map.delete('b'));
console.log(map.get('b'));
console.log(map);
console.log(map.has('a'));

map.set('a', 5);
console.log(map);

for (const [key, value] of map) {
    console.log(key + ' = ' + value);
}

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

    getAge() {
        return this.#age;
    }

}

const newPerson = new Person('Ante', 'Antic', 29);

console.log(newPerson);
console.log(newPerson.fullName);

//console.log(newPerson.age);
console.log(newPerson.getAge());