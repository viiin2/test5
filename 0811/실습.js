let bookJson = '{"title": "js", "price": 20000, "rent": true, "user": null, "tags": ["it", "web"], "loc": {"floor": 2}}';
let book = JSON.parse(bookJson);
console.log(book.title, book.loc.floor, book.tags[0]);
console.log(JSON.stringify(book));

let cafeJson = '{"name": "아아", "price": 3000, "ice": true, "rank": null, "opts": ["샷추가", "연하게"], "info": {"cal": 10}}';
let cafe = JSON.parse(cafeJson);
console.log(cafe.name, cafe.info.cal, cafe.opts[0]);
console.log(JSON.stringify(cafe));

let gymJson = '{"name": "철수", "age": 25, "pay": true, "memo": null, "course": ["PT", "헬스"], "coach": {"name": "김코치"}}';
let gym = JSON.parse(gymJson);
console.log(gym.name, gym.coach.name, gym.course[0]);
console.log(JSON.stringify(gym));