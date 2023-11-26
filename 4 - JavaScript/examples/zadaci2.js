const person1 = {
    name: 'Ivan',
    surname: 'Ivanic',
    height: 180
}

const person2 = {
    name: 'Luka',
    surname: 'Lukic',
    height: 188
}
const person3 = {
    name: 'Josip',
    surname: 'Josipovic',
    height: 201
}
const person4 = {
    name: 'Ante',
    surname: 'Antic',
    height: 178
}
const person5 = {
    name: 'Ante',
    surname: 'Matic',
    height: 208
}
const person6 = {
    name: 'Ante',
    surname: 'Anamatic',
    height: 198
}
const person7 = {
    name: 'Luka',
    surname: 'Antic',
    height: 170
}

let avgHeight = 0;

function FindAverage(avgHeight) {
    let allheight = 0;

    for (let property in people) {
        allheight += people[property].height;
    }

    avgHeight = allheight / (people.length);

    console.log('Prosjecna visina je: ' + avgHeight);

    return avgHeight;
}


function FindAboveAverage(people, avgHeight) {

    let MaxDiff = Math.abs((people[0].height) - avgHeight);
    let index = 0;
    console.log('Ljudi cija je visina veca od prosjecne su: \n');
    /*for (let property in people) {
        if (people[property].height > avgHeight) {
            let index = people.indexOf(property);
            console.log(index + '. ' + people[property].name + 'sa ' + people[property].height + 'cm');
        }
    }*/

    for (let i = 0; i < people.length; i++) {


        if (people[i].height > avgHeight) {
            console.log((i) + '. ' + people[i].name + ' sa ' + people[i].height + 'cm');
        }

        let newMax = Math.abs((people[i].height) - avgHeight);

        if (newMax > MaxDiff) {

            MaxDiff = newMax;
            index = i;

        }

    }
    console.log('Najvecu razliku u visini od prosjecne ima: \n' + people[index].name + ' sa ' + MaxDiff);
}

function SortByName(people) {

    people.sort((person1, person2) => {
        if (person1.name < person2.name) {
            return -1;

        } else if (person1.name > person2.name) {
            return 1;
        } else if (person1.surname < person2.surname)
            return -1;
        else if (person1.surname > person2.surname)
            return 1;

    })
}

function SortBySurname(people) {

    people.sort((person1, person2) => {
        return person1.surname < person2.surname ? -1 : 1;
    })
}

function FindNameK(people) {

    let index = 0;
    index = people.findIndex(people => people.name.substring(0, 1).toUpperCase() === 'K');


    if (index === -1) {
        console.log('Ne postoji osoba koja pocinje sa slovom K');

    } else {
        console.log('Osoba kojoj ime pocinje sa k: ' + people[index].name + ' ' + people[index].surname);

    }

}

function CheckHeightAbove200(people) {

    let HighPeople = 0;

    HighPeople = people.filter(people => people.height > 200);

    console.log(HighPeople);

    if (HighPeople.length === 0) {
        console.log('Nema ljudi koji su veci od 200 cm!');
    } else {

        for (let property in HighPeople) {

            console.log(HighPeople[property].name + ' ' + HighPeople[property].surname + ' je veci od 200 cm sa: ' + HighPeople[property].height);

        }
    }
}

function FindVowelPeople(people) {

    let vowelPeople = 0;

    vowelPeople = people.filter(people => ((people.name.substring(0, 1).toUpperCase() === 'A') || (people.name.substring(0, 1).toUpperCase() === 'E') ||
            (people.name.substring(0, 1).toUpperCase() === 'I') || (people.name.substring(0, 1).toUpperCase() === 'O') || (people.name.substring(0, 1).toUpperCase() === 'U')) &&
        ((people.name.slice(-1).toUpperCase() === 'A') || (people.name.slice(-1).toUpperCase() === 'E') ||
            (people.name.slice(-1).toUpperCase() === 'I') || (people.name.slice(-1).toUpperCase() === 'O') || (people.name.slice(-1).toUpperCase() === 'U')));
    console.log(vowelPeople + '\n vowel people su: \n');

    for (let property in vowelPeople) {
        console.log(vowelPeople[property].name);
    }

}

/*let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}*/

let people = [person1, person2, person3, person5, person6, person7];
people.push(person4);

avgHeight = FindAverage();
FindAboveAverage(people, avgHeight);
SortBySurname(people);

//find person whose name starts with 'k'
FindNameK(people);

//find people that are higher then 200cm
CheckHeightAbove200(people);

//find people whose name start and ends with vowel 
FindVowelPeople(people);


for (let property in people) {
    console.log('Osoba: ' + people[property].name + ' ' + people[property].surname + ' je visoka: ' + people[property].height);
}


let heightPeople = people.filter(people => people.height > avgHeight);

for (let property in heightPeople) {
    console.log(heightPeople[property].name + ' sa ' + heightPeople[property].height);
}