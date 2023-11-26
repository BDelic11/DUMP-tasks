// regex se koristi za validaciju u kodu i trazenje neceg specificnog

let abcRegex = /abc/;
let altAbcRegex = new RegExp('abc');

let firstTest = 'abc';
let secondTest = 'abbbbbbbc abs';
let thirdTest = 'acsjtzfjntas';
let fifthTest = 'ABC';

// regex.test() -> provjeramo (vraca boolean)
console.log(abcRegex.test(firstTest));
console.log(abcRegex.test(secondTest));
console.log(abcRegex.test(thirdTest));


// b* -> 0 ili vise puta se ponavlja ono sta je isprid '*'odnosno moze ponovit slovo 'b'
// b+ -> jedan ili vise puta se ponavlja slovo koje je prije '+'
// \sb -> razmak prije 'b'
// b? -> ili 0 ili 1 put se ponavlja slovo prije '?'
// [^a] -> sve osim a znaci bez 'a'
// /abc/i -> case insensitive 
// /a.c/ -> tocno jedan znak izmedu 'a' i 'c' operator -> '.'

let abcRegexWithWhitespace = /a\s*b*c/;

console.log(abcRegexWithWhitespace.test(firstTest));
console.log(abcRegexWithWhitespace.test(secondTest));
console.log(abcRegexWithWhitespace.test(thirdTest));

let abcRegexWithOptionalB = /ab*c/;
let abcRegexWithMultipleB = /ab+c/;

console.log(abcRegexWithOptionalB.test(thirdTest));
console.log(abcRegexWithOptionalB.test(secondTest));

console.log(abcRegexWithMultipleB.test(thirdTest ));
console.log(abcRegexWithMultipleB.test(secondTest));

let withoutLowercaseLetterRegex = /[^a-z]/
console.log(withoutLowercaseLetterRegex.test(firstTest)); 

console.log(withoutLowercaseLetterRegex.test(fifthTest));

let caseInsensitive = /abc/i;
console.log(caseInsensitive.test(firstTest));

let somethingBetweenRegex = /a.c/;
console.log(somethingBetweenRegex.test(firstTest));
console.log(somethingBetweenRegex.test(thirdTest));

// split po regexu splita po trazenom regexu i odvoji nam sta je prije a sta posli tog istog stringa

let abcSplit = secondTest.split(abcRegexWithOptionalB);
console.log(abcSplit);

// match vraca tocno onu koju trazimo
// g -> global ne staje nakon sta nade prvi  'match' nego pretrazi i vrati sve

let abcRegexWithWhitespaceGlobal = /a\s*b*c*/g;

console.log(secondTest.match(abcRegexWithWhitespace));
console.log(secondTest.match(abcRegexWithWhitespaceGlobal));
