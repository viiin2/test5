//변수 = 값의 이름을 붙여두는것 이름이 있어야 나중에 다시 꺼내 쓰거나 바꿀 수 있습니다.
// let
// const
// 기본선언: 저장공간을 만드는 것 / 할당: 그 공간의 값을 넣는것
//  선언
let score;
// 할당
score = 30;

console.log(score);
//let = 나중에 값이 바뀔 수 있는 것에 사용
//const = 한번 정하면 안바뀌는것에 사용
//실무습관: 일단 const로 쓰고 바뀌어야할때만 let으로 바꿉니다.
console.log("점수:", score);
// 재할당
score = 80;
let haribo = 90;
console.log(haribo);
//상수 const
const PI = 3.14;
console.log(PI);

// string
// 문자열 = 글자를 다루는 값, 따옴표로 감싸는 이유는 홍길동이 "변수이름"인지 글자 그대로인지 구분해야하기때문에..

// let name = "이름";
// console.log("name", name);

console.log("it's me");
const name = "양수빈";
console.log("안녕", name);
// 템플린 리터널
console.log(`안녕 ${name} 입니다.`);
let productName = "불고기 도시락";
let stockCount = 72;
console.log(`${productName} 현재 재고: ${stockCount}`);
console.log(`3개 입고 후 현재 재고 :${stockCount}`);
// number 숫자 실수 정수 둘 다 사용가능 정수용 실수용 구분 없어서 전부 넘버하나입니다 ㅋ~ㅋ~ㅋ~ㅋ 됼려욥
let count = 123;
let opacity = 0.7;

console.log(10 / 3);
console.log(1 / 0); //infinite
console.log("abc" * 2); // Nan 숫자로 계산할수없음 not a number 에러로 멈추지 않고 nan이라는 값을 돌려주는게함정입니다.

//boolean 참 거짓
let checked = true;
let isShow = 5 < 3; //=false
//이름 관례: boolean 변수는 is/has
//qklet isShow;
let isStudent;
let hasCoupon;

let notYet;
console.log(notYet);
let selected = null;
console.log(selected);

let array_1 = ["Orange", "pineapple", "Apple", "Banana"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

let mixed = [1, "apple", false, null, undefined];
console.log(mixed[5]);

//object 배열과의 차이: 배열은 "순서"로 꺼내고, 객체는 "이름"으로 꺼낸다.
//같은 종류가 여러개 -> 배열 (과일 목록, 학생 명단)
//한 대상의 여러 정보 -> 객체 (고양이 한마리의 이름 나이 성격)
let cat = {
  name: "나비",
  age: 1,
  isCute: true,
};
console.log(cat.name);
console.log(cat.age);
console.log(cat["name"]);

console.log(`고양이 이름은 ${cat.name} 입니다. 나이는 ${cat.age}살 입니다.`);
