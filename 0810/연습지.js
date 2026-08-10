//콜백함수
//넘긴 것은 숫자 문자열 같은 "값" 이었습니다
//함수도 값이라서 인자로 넘길 수 있습니다.
//이렇게 넘긴 함수를 콜백이라고 부릅니다.
//쓰는 이유: "몇번 반복할지는 repeatRun"이 알고, "무엇을 하지"는 부르는쪽이 정하게 나누기 위해서
//덕분에 repeatRun을 고치지 않고도 매번 다른 동작을 시킬 수 있습니다.
//비유: 택배 기사에게 "도착하면 이 번호로 전화주세요" 라고 번호를 맡기는것
// 전화를 지금 거는게 아니라 번호를 맡기고, 거는 시점은 받는 쪽이 정합니다
//이름 그대로 call back 나중에 다시 불러 준다는 뜻 입니다.

function repeatRun(n, calback) {
  for (let i = 1; i <= n; i++) {
    Callback(i);
  }
}

repeatRun(3, (i) => console.log(i + "바퀴 완주"));

function add(a, b) {
  let count = 0;
  console.log(count);
  return a + b;
}

console.log(add);
