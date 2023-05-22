var myString = '   Hello everybody. My name is Man, everybody is nice!!!!    ';

// 1.length
console.log(myString.length);

// 2.indexOf
console.log('Ky tu My nam o vi tri: ',myString.indexOf('My'));

// 3.slice (Lay ra mot chuoi)
console.log(myString.slice(6,15));

// 4.replace
console.log(myString.replace(/everybody/g, 'everyone')); // o day /g tuc la thay the tat ca nhung chuoi everybody

// 5.trim
console.log(myString.length);
console.log(myString.trim().length); // xoa khoang trang o hai dau

// 6.split
var language = 'C++, Java, Ruby, Python';
console.log(language.split(', ')); //Tach chuoi thanh mang

// 7.charAt (get character by index)
var myString2 = '0123456789';
console.log(myString2.charAt(1)); // khac nhau la neu qua index charAt se tra ve mot chuoi rong
// or
console.log(myString2[1]); // con arrayIndex se tra ve undefined
