//변수 하나에는 값 하나만 담았습니다.
const student1 = "김민준";
const student2 = "이서언";
const student3 = "박지훈";

//여러 값을 하나로 묶어 담는것이 배열입니다.

const students = ["김민준", "이서언", "박지훈"];
//대괄호로 감싸고 쉼표로 구분

console.log(students);

const scores = [99, 80, 20];
console.log(scores);

//빈 배열로 시작할수도 있음 나중에 채워 넣을때 ㅡㅆㅂ니다.
const emptyList = [];
console.log(emptyList);

//자료형을 섞어도 됩니다. (다만 실무에서는 같은 종류만 넣는게 좋습니다.)
const mixed = ["김민준", 20, true];
console.log(mixed);

//배열의 자료형은 object입니다. 값 하나가 아니라 값들의 묶음이니까요.
console.log(typeof students);
//출력 object

//배열인지 확인하려면 Array.isArray를 씁니다.
console.log(Array.isArray(students));
// true

//인덱스 - 몇 번째 인지
//배열의 각 자리에는 번호가 붙어있습니다=>인덱스
//중요한것은  0부터 시작한다는 점 입니다.
//
//const students = ["김민준", "이서언", "박지훈"];
// 0 1 2
console.log(students[0]);

// 첫번재가 0번인게 이상할 수 있습니다.
//컴퓨ㅓ는 인덱스를 맨 앞에서 몇칸떨어져 있나 로 셉니다
//첫 번째 값은 맨 앞에서 0칸 떨어져 있어서 0번입니다.
//프로그래밍 전반의 약속
//없는 인덱스를 꺼내면 에러가 아니라 undefined..나옴 졸리당...

console.log(students.length);
//3
//인덱스는 0부터인데 개수는 1부터 셉니다. 그래서 항상 이렇게 됩니다
//마지막 인덱스는 = length -1 이라고 쓰면 됨
console.log(student[students.length - 1]);
//출력 : 박지훈

const longList = [1, 2, 3, 4, 5, 6];
console.log(longList[longList.length - 1]);
//6

//최근에 생긴 더 편한 방법
console.log(longList.at(-1));
//6
