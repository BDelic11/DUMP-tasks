/* let numbers = [1, 2, 3];

let [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);

[first, third] = [second, first];

console.log(first);
console.log(second);
console.log(third);

let text = 'test';

[first, second] = text;


console.log(first);
console.log(second);

let person = {
    firstName: 'Tonci',
    lastName: 'Gej'
};

let { firstName, lastName } = person;

console.log(firstName);
console.log(lastName);

let expandedNumbers = [...numbers, 4, 5];
console.log(expandedNumbers);
console.log(numbers);

let copiedArray = [...numbers];
console.log(copiedArray);

let multipleArrays = [...numbers, ...expandedNumbers];
console.log(multipleArrays);
*/
const grad1 = {
    imeGrada: 'Luzern',
    imeDrzave: 'Svicarska',
    postBroj: 19000

};

const grad3 = {
    imeGrada: 'Berlin',
    imeDrzave: 'Njemacka',
    postBroj: 20000

};



const grad2 = {
    imeGrada: 'Zagreb',
    imeDrzave: 'Hrvatska',
    postBroj: 21000

};

function sortArray(copiedArray) {

    copiedArray.sort((grad1, grad2) => {

        return grad1.imeGrada < grad2.imeGrada ? -1 : 1;

    });

}

let Array = [grad1, grad2, grad3];

let newArray = Array.map(grad => grad.imeGrada);

/*
console.log(Array);
console.log(newArray);*/

function Print(Array) {

    for (let property in Array) {

        console.log(Array[property].imeDrzave + ' ' + Array[property].imeGrada);
    }
    console.log('\n');
}

let copiedArray = [...Array];

console.log(copiedArray);

Print(Array);
sortArray(copiedArray);
Print(copiedArray);
Print(Array);