for (let i = 13; i < 100000; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(`13의 배수이며 홀수 입니다.`);
  }
}

for (let j = 1; j < 10; j++) {
  console.log(`${j}단입니다.`);
  for (let k = 1; k < 10; k++) {
    console.log(`${j}X${k}=${j * k}`);
  }
}
// let j = 1;
// let k = 1;
// while (j< 10){
//     (k<10){
//         console.log(`${j}X${k}=${j * k}`);
//     }
// }

let sum = 0;
for (let num = 0; num <= 100; num++) {
  if (num % 2 == 0 || num % 5 == 0) {
    sum += num;
  }
}
console.log(`합계:${sum}`);
