//if문

//상황에 따라 건너는 갈림길을 만듭니다.
//if 소괄호 안은 boolean(true/false)가 들어갈 자리 입니다.
//조건이 참 (true)일때만 블록{}안의 문장을 실행
let temp = 85;
if (temp > 80) {
  console.log("온도경고!");
}
console.log(`현재온도 ${temp}`);

let isPresent = true;
if (isPresent) {
  console.log(`출석완료`);
}
