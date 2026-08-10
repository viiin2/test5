function checkSteps(steps) {
  if (steps >= 10000) {
    return "만보 달성";
  }
  return "아직 부족";
}
console.log(checkSteps(12000));
console.log(checkSteps(6000));

function add(a, b) {
  return a + b;
}

console.log(add(3, 4));

//덧셈 뺄셈 나누기 곱하기 나머지 거듭제곱
//매개변수 함수를 만들떼 적는 빈칸이름
//인자는 함수를 부를때 넣는 실제값.

function add(a, b) {
  return a + b;
}
function mina(a, b) {
  return a - b;
}
function star(a, b) {
  return a * b;
}
function nanu(a, b) {
  return a / b;
}
function trash(a, b) {
  return a % b;
}
function starstar(a) {
  return a ** b;
}

console.log(add(3, 4));
console.log(mina(3, 4));
console.log(star(3, 4));
console.log(nanu(3, 4));
console.log(trash(3, 4));
console.log(starstar(3, 4));
