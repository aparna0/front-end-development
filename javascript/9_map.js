/*----------------------------------Map()-------------------------------------
Map()
set()
get()
entities()
keys()
values()
delete(key)
clear()
groupBy(function)
*/

const map1 = new Map();
map1.set("aparna", "backend developer");
console.log(map1);                              //Map(1) { 'aparna' => 'backend developer' }

const map2 = new Map(
[
    ["a",200],
    ["b",250],
    ["c", 300],
    ["d",150]
]
);
map2.set("a",350);
console.log(map2);                              //Map(4) { 'a' => 350, 'b' => 250, 'c' => 300, 'd' => 150 }

console.log(map2.get("a"));                     //350

map1.delete("aparna");
console.log(map1);                              //Map(0) {}


const arr = [-2,-1,0,1,2];

function arrToFilter(arr){
    if(arr<0)   return "neg";
    else if(arr>0) return "pos";
    else return "zero";
}

const results = Map.groupBy(arr, arrToFilter);
console.log(results);                           //Map(3) { 'neg' => [ -2, -1 ], 'zero' => [ 0 ], 'pos' => [ 1, 2 ] }
