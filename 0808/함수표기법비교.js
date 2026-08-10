sayHello1("선언문");
//함수 선언식
function sayHello1(name) {
  console.log(`Hello, ${name}`);
}
//함수 표현식
const sayHello2 = function (name) {
  console.log(`Hello, ${name}`);
};
//화살표 함수
const sayHello3 = (name) => {
  console.log(`Hello, ${name}`);
};
sayHello2("표현식");
sayHello3("화삺표");

//이거를 화살표 함수로 만드세요
const double1 = (n) => {
  return n * 2;
};

const double2 = (n) => n * 2;
console.log(double2(2));

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
const pow = (a, b) => a ** b;

console.log(add(2, 3));
console.log(sub(2, 3));
console.log(mul(2, 3));
console.log(div(2, 3));
console.log(mod(2, 3));
console.log(pow(2, 3));
