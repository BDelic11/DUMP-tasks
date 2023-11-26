
const city1 = {

    name: 'Split' ,
    countryName: 'Croatia' ,
    postNum: 21000 

}

const city2 = {

    name: 'Berlin',
    countryName: 'Germany' ,
    postNum: 19000

}

const city3 = {

    name: 'Paris',
    countryName: 'France',
    postNum: 12000

}

const city4 = {

    name: 'Rijeka',
    countryName: 'Croatia',
    postNum: 20000

}

const city5 = {

    name: 'Sad',
    countryName: 'Croatia',
    postNum: 23000

}


let array =  [city1, city2, city3, city4];
let mapArray = array.map(array => array.name);
let copiedArray = [...array];

copiedArray.push(city5);

function Print(array){

    for(let property in array){
        console.log(array[property].name);
        console.log('\n');
    }

}

function SortByName(array) {
    
    let sortedArray = array.sort((first, second) => {
        if (first.name < second.name) {
            return -1;
        } else return 1;
    } );

    console.log('Sorted by name alphabeticaly:\n');

    for(let property in sortedArray) {
        
        console.log(sortedArray[property].name + '\n');
    }
}

Print(array);
console.log(mapArray);
Print(copiedArray);

SortByName(array);
