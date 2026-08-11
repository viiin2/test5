//복사가 아니라 같은 배열에 잃표를 하나 더 붙인것이라 한쪽을 고치면 양쪽이 다 바뀝니다..
//스프레드는 짐을 새 집으로 옮겨 담는 것입니다.
const fruits = ["사과", "당근"];

const copy2 = fruits;

console.log(copy2[1]);
fruits[1] = "수박";
console.log(copy2);

//...은 껍데기를 벗겨 알맹이르 펼친다는 뜻입니다.
//fruits -> [사과, 당근]
//...fruits -> 사과, 당근 (알맹이 두개로 펼쳐짐);그래서 펼친 알맹이를 새 대괄호에 다시 담는것. 복사본이 됩니다.
//베얄 복사 결합
//

const copy = [...fruits];
console.log(copy);
fruits[1] = "당근";
console.log(copy);
console.log(fruits);

//스프레드는 본문을 복사한거라 본문을 바꿔도 달라지지xxx