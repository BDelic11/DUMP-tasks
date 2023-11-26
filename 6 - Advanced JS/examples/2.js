// Destrukturiranje

let num = [1,2,3];

let [first, second] = num;

console.log(first);
console.log(second);

[first, second] = [second, first];

console.log(first);
console.log(second);

[first, ,second] = num;

console.log(first);
console.log(second);

let text = 'test';

[first, second] = text;

console.log(first);
console.log(second);

const person = {
    firstName :'Toni',
    lastName : 'Tonko'
}

let{firstName, lastName} = person;

console.log(firstName);
console.log(lastName);

firstName = 'Josip';

console.log(firstName);
console.log(person.firstName);

let {lastName: surname} = person;

console.log(surname);

//Spread operator

let expendedNums = [...num, 4];
console.log(expendedNums);

let copiedNums = [...num];
console.log(copiedNums);

let mergeArray = [...expendedNums, ...copiedNums];
console.log(mergeArray);

let letters = [...text];
console.log(letters);

let copiedPerson = {...person};
let extendPerson = {...person, age:22};
console.log(copiedPerson);
console.log(extendPerson);

copiedPerson.lastName = 'Delic';
console.log(copiedPerson);

//Zadatak


const grad1 = {

    name : 'Split',
    country : 'Hrvatska',
    postNum : '21000'

}

const grad2 = {
    
    name : 'Zagreb',
    country : 'Hrvatska',
    postNum : '21000'

}

const grad3 = {
    
    name : 'Oslo',
    country : 'Norveska',
    postNum : '25000'

}

const grad4 = {
    
    name : 'Berlin',
    country : 'Njemacka',
    postNum : '20000'

}

let Array = [grad1, grad2, grad3, grad4];
let newArray = [...gradovi];

function Sort(Array) {
    Array.Sort(Array => Array.name{
        
    })
}

function Print(Array){
   for (let property in Array) {

    console.log(Array[property].name + ' ' + Array[property].country);
    
   } 
}

function PrintMap(Array){
   for (let property in Array) {

    console.log(Array[property].name);
    
   } 
}

Print(Array);

let mapArray = gradovi.map(grad => grad.name);

PrintMap(mapArray);