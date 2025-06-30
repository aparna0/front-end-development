const prompt = require("prompt-sync")();
/* Javascript:
- javascript is cross-platform, object-oriented scripting language. 
- It is programming language which makes websites more interactive and dynamic.
- It is executed by web browser, server or any device which have javascript engine.
- It manipulates HTML and CSS
- handling user events
- validates forms 
*/

console.log("Welcome to Javascript World!!!")
console.log("1"+2+3);   
console.log(1+2+"3");   
console.log(1+"2"+3);   
/*
Welcome to Javascript World!!!
123
33
123
*/
/*
    Note:
        Javascript evaluates expresion from left to right
*/

/*---------------------------------------------------------------- variables------------------------------------------------------------------- 
- variables are declared in 4 ways:
    1. automatic: no need to mention any keyword for variable declartion
    2. var: it is old way to declare variable and scope is through out the program. can't create block level variables
    3. let: It is replacement for var to declare variables whose value can be changed  and having block scope
    4. const: it is to define constants whose value is not allowed to change

    Note:
        - Only use var if you MUST support old browsers.
*/

//-------------1.Automatic------------
 a = 10;    //semicolom is not mandatory
 b = 20;
 c = a+b;
 console.log("a+b", c);

//------------2.var---------------
 var cnt = 0;
 if(true){
    var cnt = 1;
    console.log("cnt inside the if block: ", cnt);
 }
 console.log("cnt outside the if block: ", cnt);

 /*
 output
 cnt inside the if block:  1
 cnt outside the if block:  1   //beacuse var declared global variable and can't create block level variables
 */

 //------------3.let---------------
 let cnt2 = 0;
 if(true){
    let cnt2 = 1;
    console.log("cnt inside the if block: ", cnt2);
 }
 console.log("cnt outside the if block: ", cnt2);
 /* 
 output:
 cnt inside the if block:  1
 cnt outside the if block:  0
 */

 //------------4.const---------------
 const cnt3 = 0;
 if(true){
    // cnt3 = 1;        TypeError: Assignment to constant variable
    console.log("cnt inside the if block: ", cnt3);
 }
 console.log("cnt outside the if block: ", cnt3);
 /* 
 output:
 cnt inside the if block:  0
 cnt outside the if block:  0
 */

 //--------------------$ and _ as variable name -----------------
 // JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
   
 let $ = "Hello World";
 let $$$ = 2;
 let $myMoney = 5;

 let _ = "Johnson";
let _x = 2;
let _100 = 5;

/*---------------------------------------------------------------- operators------------------------------------------------------------------- 
arithmetic, logical, assignment and comparosion operators are same as java
only different is as follows:
    1. === : equal value and type
    2. !== : not equal value and type
    3. == : only value is equal irrespective of type
    4. != : value is not equal and type is not checked here
*/

console.log("1"==1);    
console.log(1==1);      
console.log("1"!=1);    
console.log(1!=1);    
console.log("1"===1); 
console.log(1===1);     
console.log("1"!==1);   
console.log(1!==1);     

/*---------------------------------------------------------------- datatypes------------------------------------------------------------------- 
    1. Undefined
    2. string
    3. number
    4. bigint
    5. boolean
    6. null
    7. object
    8. symbol
*/

/*---------------------------------------------------------------- function-------------------------------------------------------------------*/

function multiply(a,b){
    return a*b;
}

let no1 = prompt("enter numbe1: ");
let no2 = prompt("enter number2: ");

console.log("mutliplication of "+ no1 + " and " + no2+ " is " + multiply(no1,no2));