const coords = [37.5665, 126.978, 100];
const [lat, lng, alt] = coords;
console.log(lat, lng); // 37.5665 126.9780

const nums = [1, 2, 3, 4, 5];
const [first, , third] = nums;
console.log(first, third);

//나머지 패턴 -
const [head, ...tail] = nums;
console.log(head); //1
console.log(tail); //[2, 3, 4, 5]

let a = 1;
b = 2;
temp = 0;
temp = a;
a = b;
b = a;

console.log(a); //2
console.log(b); //1
