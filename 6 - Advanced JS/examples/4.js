const person1 = {
    name:'Ivan',
    surname: 'Ivic',
    height: 201
}
const person2 = {
    name:'Luka',
    surname: 'Lukic',
    height: 160
}
const person3 = {
    name:'Ante',
    surname: 'Antic',
    height: 187
}
const person4 = {
    name:'Karlo',
    surname: 'Katl',
    height: 170
}
const person5 = {
    name:'Josip',
    surname: 'Aasa',
    height: 169
}
const person6 = {
    name:'Karlo',
    surname: 'Kasa',
    height: 204
}

let persons = [person1, person2, person3, person5];
let sortedArray;
persons.push(person6);

function Print(persons) 
{
for (let property in persons) {
    
    console.log('name: ' + persons[property].name + '\n surname: ' + persons[property].surname + '\n height: '+persons[property].height );
    
}
}

function FindAvg(persons) {

    let averageHeight = 0;
    let sumHeight = 0;

    for (let property in persons) {
        
        sumHeight += persons[property].height;
          
    }

    averageHeight = sumHeight/persons.length;
    console.log('Average height: '+ averageHeight);

    FindExtreme(persons, averageHeight);

}

function FindExtreme(persons, averageHeight) {

    let extreme = person1;

    console.log(extreme);

    for (let property in persons) {
        
        if ((Math.abs(extreme.height-averageHeight)) < (Math.abs(persons[property].height-averageHeight))) {
           extreme = persons[property];
        }

    }

    console.log(extreme.name);

}

function SortbySurname(persons) {

    let sorted = persons.sort((person1, person2) => {
    
        if (person1.surname < person2.surname) {
          return -1;
        } else return 1;

    })

    Print(sorted);


};

function FindLastnameK(persons) {

    let ArrayWithKpersons = persons.filter(person => person.surname[0] === 'K' || person.surname[0] === 'k' );

    console.log(ArrayWithKpersons[0].surname);

}

function FindMoreThan200(array) {

    let highPersons = array.filter(array => array.height > 200);
    highPersons.map(person => person.name);

    console.log('Veci od 200 su: \n');

    for(let property in highPersons){

        console.log('Ime: ' + highPersons[property].name +'\n');

    }

}




Print(persons);
FindAvg(persons);
SortbySurname(persons);
FindLastnameK(persons);
FindMoreThan200(persons);
