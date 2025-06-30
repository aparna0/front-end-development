/* --------------------------------- JSON -------------------------------------
- JavaScript Object Notation
- syntax : {"key": "value"}

------------- different between javascript object and JSON string -------------
JavaScript objet - 
    1. syntax : {key: "value"}
    2. comments are allowed
    3. JSON.parse(JSON) : JSON string to javscript object

JSON -
    1. syntax : {"key": "value"}
    2. comments are not allowed
    3. JSON.stringify(javascript_object) : convert javascriptObject to JSON string
*/

const javascriptObject = {
    id: 1,
    name: "aparna"
}

const JSONObject = {
    "role": "backend developer",
    "salary": 1500000
}

console.log(javascriptObject);          //{ id: 1, name: 'aparna' }
console.log(JSONObject);                //{ role: 'backend developer', salary: 1500000 }

/*------------------ convertion ---------------------- */
console.log(JSON.stringify(javascriptObject));      //{"id":1,"name":"aparna"}
const jsonObj = '{ "key": "value" }';
console.log(JSON.parse(jsonObj));                   //{ key: 'value' }