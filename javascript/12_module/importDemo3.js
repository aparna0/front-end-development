/* ---------------- named import ----------------- */
import {a,b} from "./exportDemo.js";
console.log(a+b);
import {c,d} from "./exportDemo.js"
console.log(c+d);

/* ---------------- default import ----------------- */
import demo from "./exportDemo.js"
console.log(demo)

/*
PS D:\Aparna\FrontEnd> node "d:\Aparna\FrontEnd\javascript\modules\importDemo3.js"
30
70
{ id: 1, name: 'demoName' }
*/