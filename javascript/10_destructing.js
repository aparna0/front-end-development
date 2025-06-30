/*------------------------ destructing object ---------------------------*/
const employee = {
    name: "aparna",
    role: "backend developer"
};

const {role, name, salary=1500000} = employee;
console.log(salary);                                //1500000
console.log(name);                                  //aparna

/*------------------------ destructing array ---------------------------*/
const table = [2,4,6,8,10];
let [first, second] = table;
console.log(first+second);                          //6

/*------------------------ destructing array with specifix index---------------------------*/
let {[0]:first2, [3]:third} = table;
console.log(first2+third);                          //10

/*------------------------ unpacking string ---------------------------*/
const [a,b,c,d,e,f] = "aparna";
console.log(a);                                     //a


/*------------------------ destructing with ..rest -------------------------*/
const [x,y,...rest] = "aparna";
console.log(rest);                                  //[ 'a', 'r', 'n', 'a' ]

/*------------------------ destructing with skip -------------------------*/
const [p,,,,,q] = "aparna";
console.log(p,q);                                   // a a
