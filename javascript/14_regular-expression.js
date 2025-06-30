/*------------------------------------------------------------------------
------------ search() - return index of match pattern
------------ match() - returns matched string
------------ test() - return treu or false
------------ exec() - return matched string

search for specific expression
i - ignore case
g - global search (find all)
m - multi line search 
d - start and end mathing
Ex: search(/aparna/i)
/aparna/i is regular expression
aparna is pattern
i is modifier
*/

const str = "I am is aparna \n I am backend developer";

console.log(str.search(/APARNA/));          //-1
console.log(str.search(/APARNA/i));         //8
console.log(str.match(/am/g));              //[ 'am', 'am' ]
console.log(str.match(/I/mi));              
/*
  'I',
  index: 0,
  input: 'I am is aparna \n I am backend developer',
  groups: undefined
]
*/
const pattern = /developer/;        
console.log(pattern.test(str));             //true
console.log((/I/).exec(str).at(0));         //I