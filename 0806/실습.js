console.log(`"${typeof 1}"isn't "${typeof "문자"}" data type`);

//형변환 = 자료형을 바꾸는것.
console.log(1 + "2"); //-> 12 숫자 +문자 문자열연결.

let mathScore = "77";
let engScore = "88";
console.log("10" - 5); // ->5 뺄셈은 뜻이 빼기밖에없어서..
console.log(true + 1);
//true = 1. false = 0
//명시적 형변환 - 개발자가 직접 변환
console.log(String(123));
console.log(Number("123") + 1);
console.log(Number("abcde")); //NaN

//parseInt /parsefloat/ boolean
console.log(parseInt("42px"));
console.log(parseFloat("3.14kg"));
console.log(Boolean(0));
