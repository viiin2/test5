//변수에 함수를 값처럼 할당 (익명함수)
const sayHi = function (name) {
  return `Hi${name}`;
};

console.log(sayHi("홍길동"));

const sameHi = sayHi;
console.log(sameHi("이영희"));

function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

const add3;
