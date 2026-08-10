// 함수 = 자주 쓰는 코드 묶음에 이름을 붙여 두고 필요할때마다 불러쓰는것.
// 인삿말을 100명에게 하려고 코드를 100번 복사하는 대신 함수를 100번 부르면 됩니다.
// 게다가 문구를 바꿀일이 생겨도 함수 안한곳만 고치면 끝납니다..

// function
function greet(name) {
  const msg = `안녕하세요 ${name}님`;
  return msg;
}

const result = greet("김철수");
console.log(result);

console.log(greet("홍길동"));

function greet2(name) {
  return `안녕하세요 ${name}님`;
}
const result2 = greet2(`에단`);
console.log(result2);
console.log(greet2(`이영희`));
