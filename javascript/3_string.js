/* String in javascript is same as in java. */

//needs to define in single or double quotes
let str1 = "Aparna" + ' mangalaram'
let str2 = "She is 'Java Developer'";
let str3 = "It\' allright";     //escape characters same as java
let text =                      //formatted string
`The quick
brown fox
jumps over
the lazy dog`;
let str4 = new String("aparna");        //creating using String Object
let str5 = "aparna";
str5[0] = "A";                          // string is immutable

console.log(str1);
console.log(str2);
console.log(str3);
console.log(text);
console.log(str4);
console.log(str5);
console.log(str4 == str5);
console.log(str4 === str5);

/*
output:
    Aparna mangalaram
    She is 'Java Developer'
    It' allright
    The quick
    brown fox
    jumps over
    the lazy dog
    [String: 'aparna']
    aparna
    true
    false
*/
