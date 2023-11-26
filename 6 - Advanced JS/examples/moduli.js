//da bi koristili moramo u index.html u script tagu dodati type = module
//  <script src="examples/moduli.js" type = "module"></script>

import firstText from "./helpers/texts.js";
import { secondText, printText } from "./helpers/texts.js";
import testText from "./helpers/texts.js";
import * as textHelper from './helpers/texts.js';


console.log(firstText);
console.log(secondText);
printText('This is some text');

console.log(testText);

textHelper.printText('asfafgw');