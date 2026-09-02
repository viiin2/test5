//배열은 만든 뒤에도 계속 늘리구 줄일 수 있움니더
//앞뒤로넣구 빼는 네가지 메소드를 배웁니덩~~

//메소드 라는 말은 값 뒤에 점으로 찍고 붙여서 일을 시키는 것을 메소드 라고 부릅니다.

//cart.push(`우유`) -> `장바구니야, 우유 좀 넣어줘`

//console.log() 같은 모양입니다.
//앞으로 배열의 메소드 문자열의 메소드라는 말을 자주 나오는데
// ..그 값 뒤에 점 찍고쓰는 것 이라고 읽으시면 됩니다....
//앞 0번 뒤 마지막 
//추가 unshift push
//빼기 shift pop

//뒤쪽 (push/pop)

console.log(cart);
cart.push("아메리카노");
console.log(cart);
//출력 : [`아메리카노`]

console.log(cart);
cart.push("케이크");
console.log(cart);
//출력 : [`아메리카노`, `케이쿠]

const newLength = cart.push(`샌드위치`)
console.log(newLength);
//출력:5

const numbers = []
for(let i = 1; i<=5; i++){
    numbers.push(i*10);
}
console.log(numbers);

const stack = [`첫째`, `둘째`, `셋째`];
const removed = stack.pop();

console.log(stack);
//pop은 빼낸 값을 돌려줍니다. push와 돌려주는 것이 다릅니다.

//push -> 넣은 뒤의 개수
//pop -> 빼낸 값
//빈 배열에서 popgkaus ???입니다.에러는 안납니다.
const emptyArr = [];


//console.log(removed1);
console.log(emptyArr.pop());
//출력 : undefined

//unshift / shift

const queue = ["둘째", "셋째"];
queue.unshift("첫째");
console.log(queue);
//첫째 맨앞에 추가됨.. 

const first = queue.shift();
console.log(first);
//첫째 
console.log(queue);
//출력 :["둘째", "셋째"];
//splice 중간에 넣기 빼기
//splice는 우너하는 위치에서 원하는 개수만큼 다룹니다.
//배열.splice(시작위치, 지울개수, 넣을값들...)
//[중간 삭제]
const menu = ["아메리카노", "라떼", "카푸치노", "케이크"];
menu.splice(1, 1); //1번자리에서 1개 삭제
console.log(menu);
//출력 : 라떼삭제

const list = [`a`, `b`,`c`,`d`, `e`, `f`];
const cut = list.splice(1, 3);
console.log(cut);
console.log(list);

