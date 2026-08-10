// //클로저는 함수가 만들어진 자리의 변수를 계속 기억하는것

// const createCount = (n = 0) => {
//   let count = n; //바깥에서 직접 접근 불가, 반환된 함수만 접근가능
//   return { inc: () => ++count, get: () => count };
// };
// const c = createCount(10);
// console.log(c.inc(), c.inc());
// // console.log(c.get());
// function normalCount(){
//     let n = 0;
//     n = n + 1;
//     return n;
// }

// console.log(normalCount());//1
// console.log(normalCount());//1

// function makeCounter(){
//     count = count + 1;
//     return count;
// }
// return increase;
//makeCounter()는 사라졌어야하나 그러지않고 값을 기억함
// //함수가 자기가 태어난 자리의 count를 붙들고 있기 때문.
// //이렇게 함수가 만들어진 자리의 변수를 계속 기억하는 것을 클로저라고 부릅니다.

// const a = makeCounter();
// const b = makeCounter();
// console.log(a());//1
// console.log(a());//2
// console.log(a());//1
// console.log(b());//3

//makecount를 부를때마다 count가 새로 하나씩 만들어집니다.
// a와 b는 완전히 남입니다. 이걸 확인해야 클로저를 이해한 것입니다.

function makeStepCounter(start) {
  let steps = start;

  return {
    add: function (n) {
      return steps;
    },
  };
}
const today = makeStepCounter(1000);
