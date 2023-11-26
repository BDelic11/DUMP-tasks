const firstPerson = {
  firstName: "Ante",
  lastName: "Antic",
  height: 169,
};
const secondPerson = {
  firstName: "Jopsi",
  lastName: "Rojop",
  height: 168,
};
const thirdPerson = {
  firstName: "Pero",
  lastName: "Peric",
  height: 170,
};
const fourthPerson = {
  firstName: "Kima",
  lastName: "Peric",
  height: 189,
};
const fifthPerson = {
  firstName: "Marin",
  lastName: "Peric",
  height: 190,
};
const sixthPerson = {
  firstName: "Ivan",
  lastName: "Peric",
  height: 199,
};
const seventhPerson = {
  firstName: "Marin",
  lastName: "Peric",
  height: 200,
};


let people = [firstPerson, secondPerson, thirdPerson, fourthPerson, fifthPerson, sixthPerson, seventhPerson];

let sortedPeople = people.sort((firstPerson, secondPerson) => {
    if (firstPerson.lastName > secondPerson.lastName) {
        return 1;
    } else if (firstPerson.lastName < secondPerson.lastName) return -1;
    else return firstPerson.firstName > secondPerson.firstName ? 1 : -1 ;
})
console.log(sortedPeople);

let firstNameK = people.filter(person => person.firstName[0] === 'K');

console.log(firstNameK)

for(let prop in people) {
    console.log(`Ime: ${people[prop].firstName} `)
}
