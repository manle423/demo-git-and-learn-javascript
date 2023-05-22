var languages = [
  'Java',
  'C++',
  'Ruby',
  'Javascript',
  'Python',
  'Go',
  'PHP',
];
var social_media = [
  'github',
  'facebook',
  'instagram',
  'telegram',
];

// Chuyen mang thanh string
console.log(languages.toString());

// join thi giong nhu tren
console.log(languages.join(' - '));

// pop la xoa element cuoi cung va tra ve phan tu da xoa
console.log(languages.pop());
// luc nay mang chi con 6 phan tu do da bi pop :>
console.log(languages);

// push la them nhieu phan tu vao cuoi mang va tra ve so phan tu moi cua mang
console.log(languages.push('PHP'));

// shift la nguoc lai voi pop, tuc la se xoa phan tu o dau mang va tra ve gia tri do
console.log(languages.shift());

// unshift la nguoc lai cua push tuc la them mot hoac nhieu phan tu vao dau mang va tra ve so luong phan tu moi cua mang
console.log(languages.shift('Java'));

// splice tuc xoa di n phan tu tu vi tri i va them vao phan tu tu vi tri thu i do
languages.splice(2, 3, 'Swift'); // luc nay mang mat 3 phan tu ruby javascript va python va them vao Swift

// concat la gop 2 mang lai voi nhau
console.log(languages.concat(social_media));

// slicing tuc se cat va in ra n phan tu tu vi tri thu i
console.log(languages.slice(1, 2)); // luc nay se tra ve facebook, instagram
