//nameani export 
export let firstText = 'Test text';

let secondText = 'tesssstt';

function printOutText (text) {
    console.log(text);
}

//ili ovako drugi nacin nameanog na kraju filea samo napisemo sta sve zelimo exportat

export {
     secondText, printOutText as printText
}

//defaultni export 
let defaultText;

export default defaultText = 'default text';

