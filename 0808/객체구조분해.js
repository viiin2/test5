//배열구조분해는 순서로 짝지었지만. 객체는 이름으로 짝짓습니다
//그래서 중괗로 안의 변수 이름이 객체의 키와 정확히 같아야합니다 . 순서는상관없습니다
//키 이름으로 매핑 -> 순서와 무관
const product = { name: "이온음료", price: 1200 };
const { name, price = product };
//key 와 같으 ㄴ이름이어야 함 price, name이런식으로 순서를 다르게 써도 결과는 같음
console.log(name, price);
console.log(title); //undefined

function printProduct({ name, price }) {
  console.log(name + ":" + price + "원");
}
printProduct(product);
