//Prefix & Postfix

var a = 6;

// Tao ra mot bien 'a copy'
// a = a + 1;
// tra ve a copy
var output = a++;
console.log(output);

console.log(a);


var number = 1;
// tao ra mot bien number_copy = 1
// number = number + 1 = 2;
// --number tuc la number_now = 1;
// tuc ket qua se la number_copy + number_now = 2

var ketqua = number++ + --number;
console.log(ketqua);


var a = 2;

var kho = a++ * 2 - a++ * 2;
// 4 - 6
console.log(kho);