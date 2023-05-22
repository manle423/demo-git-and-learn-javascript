/**
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 * Symbol
 */

var n = 1;
var s = 'String';
var b = true;
var u;
var isNull = null;
var id = Symbol('id'); //unique

/**
 * Function
 * Object
 */

//function
var myFunction = function(){
    console.log('Hi, xin chao cac ban');
}
myFunction();

//Object
var myObject = {
    name: 'Man Le',
    age: 18,
    sex: 'Male'
}

console.log('myObj', myObject);