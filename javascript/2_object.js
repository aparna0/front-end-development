/*--------------------------------------- creating object ---------------------------------------------
onject is created in 2 ways :
    1. using literal
    2. using object constructor 
    3. using new keyword

    Note:
        Comparing two JavaScript objects always returns false.
*/

/*--------------------------- 1.using literal----------------------- */
const employee = {
    empId:1,
    empName: "Aparna",
    empRole: "Java Developer",
    set role(roleDesc){
        this.role = roleDesc;
    },
    empDetails: function(){
        return (this.empId+" "+this.empName+" "+this.empRole);
    }
}

/*---------------------------2.using object constructor ----------------- */
const emp4 = new Object();


//------------------ we can add members externally------------
emp4.id = 4;
emp4.name = "Sharda";

employee.empSalary = 1500000;

const emp2 = {}
emp2.id = 2;
emp2.name = "Jhansi";
emp2["salary"] = 1200000;
emp2.emp2Details = function(){
    return (this.id+" "+this.name+" "+this.salary);
}

/*---------------------------2.using new keyword ----------------- */
//to create more than 1 object of same type
//first letter of function should be capital

function Company(companyId, companyName){
    this.companyId = companyId;
    this.companyName = companyName;
}

const companyObj1 = new Company(1,"TIAA");
const companyObj2 = new Company(2,"Accenture");
console.log(companyObj1);
//Company { companyId: 1, companyName: 'TIAA' }


/*--------------------------------------- accessing object ---------------------------------------------*/
console.log(employee.empDetails());
console.log(emp2.emp2Details());
console.log(emp4);
console.log(employee.empRole);
console.log(employee["empSalary"]);

/*
output:
    1 Aparna Java Developer 1500000
    2 Jhansi 1200000
    { id: 4, name: 'Sharda' }
    Java Developer
    1500000
*/

/*--------------------------------------- deleting object property---------------------------------------------*/

delete employee.empId;
delete emp2["id"];
console.log(employee.empDetails());
console.log(emp2.emp2Details());
console.log(employee);
/*
output:
    undefined Aparna Java Developer 1500000
    undefined Jhansi 1200000
    {
        empName: 'Aparna',
        empRole: 'Java Developer',
        empDetails: [Function (anonymous)],
        empSalary: 1500000
    }
*/

/*---------- using Object.values() and Object.entries()-----------*/
const details1 = Object.values(employee);
console.log(details1);

const details2 = Object.keys(employee);
console.log(details2);

for(let [key, value] of Object.entries(emp4)){
    console.log("("+key+", "+value+")");
}
/*
output:
    [ 'Aparna', 'Java Developer', [Function (anonymous)], 1500000 ]       
    [ 'empName', 'empRole', 'empDetails', 'empSalary' ]
    (id, 4)
    (name, Sharda)
*/

/*----------------------------------------- Object Methods --------------------------------------------*/

/*-------------------------- Object.assign(target, source)-----------------------------*/
// Copies properties from a source object to a target object

const target = {
empId: 1,
empName: "Aparna",
empRole: "QA"
};

const source = {
    empRole: "backend developer"
}

Object.assign(target, source);
console.log(target);
/*
{ empId: 1, empName: 'Aparna', empRole: 'backend developer' }
*/

//----------------------------------- Object.fromEntries() -----------------------------
// Creates an object from a list of keys/values
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const obj1 = Object.fromEntries(fruits);
console.log(obj1);
//{ apples: 300, pears: 900, bananas: 500 }


//------------------------------------ Object.groupBy(object, callback) -----------------
// Groups object elements according to a function

const callBack = ([k,v]) =>{
    return (v<500? "ok": "notOk");
}

const obj2 = Object.groupBy(fruits, callBack);
console.log(obj2);
/*
[Object: null prototype] {
  ok: [ [ 'apples', 300 ] ],
  notOk: [ [ 'pears', 900 ], [ 'bananas', 500 ] ]
}
*/

//----------------------------------- Object.entries(object)-----------------------------
// Returns an array of the key/value pairs of an object
for(const [k,v] of Object.entries(obj2)){
    console.log([k,v])
}
/*
[ 'ok', [ [ 'apples', 300 ] ] ]
[ 'notOk', [ [ 'pears', 900 ], [ 'bananas', 500 ] ] ]
*/

//---------------------------------- Object.keys(object) ------------------------------
// Returns an array of the keys of an object

//---------------------------------- Object.values(object)-----------------------------
// Returns an array of the property values of an object

