/*------------------------------------ Number Object ------------------------------------------
Property	                Description
EPSILON	            The difference between 1 and the smallest number > 1.
MAX_VALUE	        The largest number possible in JavaScript
MIN_VALUE	        The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	                A "Not-a-Number" value
*/

/* ----------------------------------- NaN------------------------------
- NaN is not a legal number.
- Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
*/
let x = 100 / "Apple";
console.log(x);                 //NaN
console.log(typeof NaN);        //number

/*---------------------------- comparing Number Object -------------------*/
console.log((new Number(10))==(new Number(10)));
console.log((new Number(10))===(new Number(10)));

/*
false
false

Note:
    javascript always return false for object comparision
*/

/* --------------------- BigInt------------------------ 
- dose not support decimal value
- arithmetic opeartion between Number and BigInt is not allowed
*/
let y = BigInt(999999999999999);
let type = typeof y;

/*------------------------toFixed() ----------------------------
returns a string, with the number written with a specified number of decimals and round the number3:
*/
let a = 9.656;
console.log(a.toFixed(0));
console.log(a.toFixed(2));
console.log(a.toFixed(4));
console.log(a.toFixed(6));
/*
10
9.66
9.6560
9.656000
*/

/*--------------------------toPrecision()------------------------- 
returns a string, with a number written with a specified length:
*/
a = 9.656;
console.log(a.toPrecision());
console.log(a.toPrecision(2));
console.log(a.toPrecision(4));
console.log(a.toPrecision(6));
/*
9.656
9.7
9.656
9.65600
*/