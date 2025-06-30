/*---------------------------------- String methods---------------------------------------- */

/*--------------------------- Accesssing string character------------------------
There are 4 ways to access string character with differet ways and having different meaning
1. using indexing - str[index]
2. charAt(index) - returns char at specidied position
3. charCodeAt(index) - returns a UTF-16 code (an integer between 0 and 65535).
4. at(index) - new method added from 2022 and also supports negative indexing.
*/

let str = "Aparna";
console.log(str[0]);
console.log(str.charAt(1));
console.log(str.charCodeAt(2));
console.log(str.at(-1));
/*
A
p
97
a
*/

/*--------------------------- Accesssing substring------------------------
There are 2 ways to access substring having different meaning
1. slice(startIndex, endIndex) - extract sunstring from start index to end index-1 and supports negative indexing
2. substring(startIndex, endIndex) - extract sunstring from start index to end index-1 and convert negative indexing to zero
*/

str = "java developer";
console.log(str.slice(0,3));            //jav
console.log(str.substring(0,3));        //jav
console.log(str.slice(-9,-1));          //develope //actual index = lenght of string - negative index
console.log(str.substring(-9,-1));      // -> str.substring(0, 0) ->  empty string - negative index is converted to 0 
console.log(str.slice(6));              //eveloper
console.log(str.substring(6));          //eveloper


/*--------------------------- String length --------------------------*/
console.log(str.length);        //6

/*--------------------------- String conversion --------------------------*/
console.log(str.toUpperCase());
console.log(str.toLowerCase());
/*
JAVA DEVELOPER
java developer
*/

/*-----------------removing white starting and ending spaces in String ----------------*/
console.log("----------------trimming--------------");
let str2 = "   Aparna  ";
console.log(str2.trimStart());
console.log(str2.trimEnd());
console.log(str2.trim());
/*
----------------trimming--------------
Aparna
   Aparna
Aparna
*/

/*-----------------adding extra character at start and end of the String ----------------*/
console.log("----------------padding--------------");
let str3 = "Aparna";
let str4 = str3.padStart(2,"&");
console.log(str4);
console.log(str3.padEnd(3,"*"));

console.log("-------------------------------string repeate--------------------------");
console.log(str4.repeat(3));
/*
-------------------------------string repeate--------------------------
AparnaAparnaAparna
*/

console.log("-------------------------------string replacement--------------------------");
/*
   replace(): replace with fisrt mathed string and it is case sensitive
   replaceAll: replace with all mathed string and it is case sensitive
*/
let str5 = "Aparna is java developer. Aparna loves to code and aparna favuorite language is java."
console.log(str5.replace("Aparna", "aapi"));
console.log(str5.replaceAll("Aparna", "aapi"));
/*
-------------------------------string replacement--------------------------
aapi is java developer. Aparna loves to code and aparna favuorite language is java.
aapi is java developer. aapi loves to code and aparna favuorite language is java.
*/

/*------------------------------- search methods--------------------------------
String Search Methods:
    String indexOf()
    String lastIndexOf()
    String search()
    String match()
    String matchAll()
    String includes()
    String startsWith()
    String endsWith()
*/
