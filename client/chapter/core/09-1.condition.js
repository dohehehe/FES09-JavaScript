/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No


/* ---------------------------- else if 복수 조건 처리 ---------------------------- */
// if 문(statement)
// else 절(caluse)

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm("영화 봤니?");

  // 영화 볼거니?
  if (!didWatchMovie) {
    let goingToWatchMovie = confirm("영화 볼거야?");

    if (goingToWatchMovie) {
      let withWho = prompt("누구랑 볼거니?");

      if (withWho === "너") {
        console.log("어머..☺️");
      } else if (withWho === "엄마") {
        console.log("효자구나!");
      } else {
        console.log("내가 아니네..?🤔");
      }
    } else {
      console.log("꼭 봐 재밌어");
    }
  } else {
    console.log("어 나 봤어..");
  }
}
watchingMovie();



 /* --------------------------------- 조건부 연산자 -------------------------------- */
// 삼항식 // const a = condition ? value1 : value2;
// 멀티 조건부 연산자 식

let didWatchMovie = "no";
let goingToWatchMovie = "no";

let message = didWatchMovie.includes("yes")
  ? "그거 재밌더라"
  : goingToWatchMovie.includes("yes")
    ? "너무 재밌겠다!!"
    : "난 별로인데..?";

console.log(message); //"난 별로인데..?"



//다른 예시

function render(node,isActive){
  const template = `<img src="${
    isActive 
    ? 'https://cdn.pixabay.com/photo/2023/09/29/10/20/sunset-8283538_1280.jpg'
    : 'https://cdn.pixabay.com/photo/2023/06/19/05/53/temple-8073501_1280.png'
  }" alt="" />`
  node.insertAdjacentHTML('beforeend',template);
}
