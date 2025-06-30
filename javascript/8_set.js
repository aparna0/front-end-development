/*-----------------------------set()----------------------------
add(ele)
has(ele)
entities()
keys()
values()
-- */
const set1 = new Set();

set1.add("1");
console.log(set1);                                  //Set(1) { '1' }

const set2 = new Set([1,2,"aparna"]);
set2.add(2);
set2.add("1");
console.log(set2.has("1"));                         //true
console.log(set2);                                  //Set(4) { 1, 2, 'aparna', '1' }

console.log("----------------- enities--------------");
for([k,v] of set2.entries()){
console.log([k,v]);
}
/*
----------------- enities--------------
[ 1, 1 ]
[ 2, 2 ]
[ 'aparna', 'aparna' ]
[ '1', '1' ]
*/

console.log("----------------- keys--------------");
for(const key of set2.keys()){
    console.log(key);
}
/*
----------------- keys--------------
1
2
aparna
1
*/

console.log("----------------- values--------------");
for(const value of set2.values()){
    console.log(value);
}
/*
----------------- values--------------
1
2
aparna
1
*/
