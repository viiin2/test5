//객체 안에 들어간 함수를 메소드라고 부름
//const cat = {name: "나비", speek: function() {...}}
//cat.speak()
//새 문법이 아니라 객체 + 함수.
const tracker = {
  name: "아침 걷기",
  report: function () {
    return "기록중";
  },
  run: () => "달리는 중",
};

console.log(tracker.report);
