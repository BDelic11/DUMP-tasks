/*let abcRegex = /abc/;
let altAbcRegex = new RegExp('abc');

let firstTest = 'abc';
let secTest = 'abbbbca bc';
let thirdTest = 'acwfqwefqfc';

console.log(abcRegex.test(firstTest));
console.log(abcRegex.test(secTest));
console.log(abcRegex.test(thirdTest));

// -- * govori da moze bit 0 ili vise slova odnosno izraza iza kojeg se nalazi a \s znaci prazno mjesto
// -- + 1 ili vise puta se ponavlja slovo
// -- ? ili 0 ili 1 put se ponavlja 
// -- . znaci da ima tocno jedan znak izmedu tih slova nije bitno koji
// -- ako doslovno trazimo .?+*... stavimo backslash 'a\.b'
// -- global regex pisemo /abc/g i koristimo ako zelimo nac ne samo prvi koji se pojavljuje nego sve 

let RegExpWithWhiteSpaces = /a\s*b*c/;
console.log(RegExpWithWhiteSpaces.test(secTest));

let RegExpWitOptionalB = /ab*c/;
let RegExpWithMultipleB = /ab+c/;

console.log(RegExpWitOptionalB.test(firstTest));
console.log(RegExpWitOptionalB.test(secTest));
console.log(RegExpWitOptionalB.test(thirdTest));

console.log(RegExpWithMultipleB.test(firstTest));
console.log(RegExpWithMultipleB.test(secTest));
console.log(RegExpWithMultipleB.test(thirdTest));

let WithoutLowerCaseLetterregEx = /[^a-z]/;
console.log(WithoutLowerCaseLetterregEx.test(firstTest));
console.log(WithoutLowerCaseLetterregEx.test(secTest));
console.log(WithoutLowerCaseLetterregEx.test(thirdTest));

let CaseInsesitiveLetterRegEx = /abc/i;
let fifthTest = 'ABC';

console.log(WithoutLowerCaseLetterregEx.test(fifthTest));
console.log(CaseInsesitiveLetterRegEx.test(fifthTest));

let acWithSomethingBeetween = /a.c/;
console.log(acWithSomethingBeetween.test(firstTest));
console.log(acWithSomethingBeetween.test(secTest));


let abcSplit = secTest.split(RegExpWitOptionalB);
console.log(abcSplit);

console.log(secTest.match(RegExpWithWhiteSpaces));

let RegExpWithWhiteSpacesGlobal = /a\s*b*c/g;
console.log(secTest.match(RegExpWithWhiteSpacesGlobal));
*/

let RegExpFirstLastNameStartUppercase = /^([A-Z]([a-z])+)\s([A-Z]([a-z])+)$/;


let sixTest = 'Antimon Antic';
let sevTest = 'AntimonAntic';
let eigTest = 'Antimon antic';
let ninTest = 'Antimon antic';

console.log(RegExpFirstLastNameStartUppercase.test(sixTest));
console.log(RegExpFirstLastNameStartUppercase.test(sevTest));
console.log(RegExpFirstLastNameStartUppercase.test(eigTest));
console.log(RegExpFirstLastNameStartUppercase.test(ninTest));