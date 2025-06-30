/*---------------------------------------- Array Iteration ---------------------------------------*/

console.log("---------------------------------------- forEach -------------------------------------");
/*--
iterate over each element
*/
const arr = [1,2,3,4,5];
arr.forEach(e=>{console.log(e)});
/*
PS D:\Aparna\FrontEnd> node "d:\Aparna\FrontEnd\javascript\arrayIteration7.js"
1
2
3
4
5
*/

console.log("---------------------------------------- map() -------------------------------------");
/*
perform given function on each element and generate new arr
*/

let arr2 = arr.map(e=>{return e*10});
arr2.forEach(e=>{console.log(e)});
/*
---------------------------------------- map() -------------------------------------
10
20
30
40
50
*/

console.log("---------------------------------------- flatMap() -------------------------------------");
/*
perform given function on each element and generate new arr with old and new element
*/

arr2 = arr.flatMap(e=>{return (e*10)});
arr2.forEach(e=>{console.log(e)});
/*
---------------------------------------- flatMap() -------------------------------------
10
20
30
40
50
*/

console.log("---------------------------------------- filter() -------------------------------------");
/*
apply given condition and return only those element which passes the given condition
*/

arr2 = arr.filter(e=>{return e%2==0});
arr2.forEach(e=>{console.log(e)});
/*
---------------------------------------- filter() -------------------------------------
2
4
*/

console.log("---------------------------------------- reduce() -------------------------------------");
/*
perform given function on each element and generate new value
*/

finalSum = arr.reduce((sum, e)=>{return (sum+e)});
console.log(finalSum);
/*
---------------------------------------- reduce() -------------------------------------
15
*/

console.log("---------------------------------------- reduceRight() -------------------------------------");
/*
perform given function on each element from right to left and generate new arr
*/

finalSum = arr.reduceRight((sum, e)=>{return (sum+e)});
console.log(finalSum);
/*
---------------------------------------- reduce() -------------------------------------
15
*/

console.log("---------------------------------------- every() -------------------------------------");
/*
returns true of each element passes given condition, else false
*/

finalSum = arr.every(e=>{return (e%2==0)});
console.log(finalSum);
/*
---------------------------------------- every() -------------------------------------
false
*/

console.log("---------------------------------------- some() -------------------------------------");
/*
returns true of each element passes given condition, else false
*/

finalSum = arr.some(e=>{return (e%2==0)});
console.log(finalSum);
/*
---------------------------------------- some() -------------------------------------
true
*/

console.log("---------------------------------------- from() -------------------------------------");
/*
generate array from given string
*/

arr2 = Array.from("aparnaDev 2");
console.log(arr2);
/*
---------------------------------------- from() -------------------------------------
[
  'a', 'p', 'a', 'r',
  'n', 'a', 'D', 'e',
  'v', ' ', '2'
]
*/

console.log("---------------------------------------- enities() -------------------------------------")
for([k,v] of arr2.entries()){
console.log([k,v]);
}
/*
---------------------------------------- enities() -------------------------------------
[ 0, 'a' ]
[ 1, 'p' ]
[ 2, 'a' ]
[ 3, 'r' ]
[ 4, 'n' ]
[ 5, 'a' ]
[ 6, 'D' ]
[ 7, 'e' ]
[ 8, 'v' ]
[ 9, ' ' ]
[ 10, '2' ]
*/

console.log("---------------------------------------- keys() -------------------------------------")
for(k of arr2.keys()){
console.log(k);
}
/*
---------------------------------------- keys() -------------------------------------
0
1
2
3
4
5
6
7
8
9
10
*/

console.log("---------------------------------------- values() -------------------------------------")
for([v] of arr2.values()){
console.log([v]);
}
/*
---------------------------------------- values() -------------------------------------
[ 'a' ]
[ 'p' ]
[ 'a' ]
[ 'r' ]
[ 'n' ]
[ 'a' ]
[ 'D' ]
[ 'e' ]
[ 'v' ]
[ ' ' ]
[ '2' ]
*/

console.log("---------------------------------------- spread (...) -------------------------------------")
arr2 = [10, 20, 30, 40, 50]
arr3 = Array.from("aparna")
finalArr = [...arr, ...arr2, ...arr3]
console.log(finalArr)
/*
---------------------------------------- spread (...) -------------------------------------
[
  1,   2,   3,   4,   5,   10,
  20,  30,  40,  50,  'a', 'p',
  'a', 'r', 'n', 'a'
]
*/

console.log("---------------------------------------- rest (...rest) -------------------------------------")
let a, b, c
[a, b, ...c] = arr;
console.log(c)
/*
---------------------------------------- rest (...rest) -------------------------------------
[ 3, 4, 5 ]
*/