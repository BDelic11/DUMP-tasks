// import i export koristimo za prebacivanje iz jednog filea u drugi

// nameani export -> tocno tog imena varijabla to ime moramo i u drugom fileu
export let firstText = 'tesst test';

// 2. nacin nameanoga exporta -> na kraju sve stavimo u {} sta zelimo exportat 
// mozemo koristiti i 'as' -> pod drugim imenom exportamo
let secondText = 'test';

function printOutText(text) {
    console.log(text);   
}

export {secondText, printOutText as printText};

// defaultni export -> ako nezna tocno sta triba importat dobit ce ovaj default text
let defaultText;
export default defaultText = 'default text';