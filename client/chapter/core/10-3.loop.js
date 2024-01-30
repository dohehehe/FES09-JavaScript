/* ------------ */
/* For Loop     */
/* ------------ */



/* ---------------------------- 2 ~ 10까지의 짝수 출력하기 --------------------------- */

let j = 0;

for(; j < 10; j++ ){
  if( j % 2 !== 0) continue;
      // console.log(j);
      // //console.log 가 아래에 있어야함
      // //continue를 하고 받아야하기 때문에
} 

      // closure
      // 변수 보호를 위해 필요



/* -------------------------------- 배열로 변환하기 -------------------------------- */
const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
      //.split() string의 매서드
      //.split('')
      //문자들의 모든 공백을 찾아서 쪼개준다.
      //공백말고 ,로 하면 ,를 찾아서 쪼개준다

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  console.log(frontEndDev[i]);
      //위의 배열 속 요소들을 각각 분리하여 출력한다.
      //이때는 배열이 아니라 각각의 string이다
  i += 1;
}


/* -------------------------- while 문 → for 문 (순환) -------------------------- */
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.
//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.


for(let i = 0; i < l; i++){
  const value = frontEndDev[i];
  const lower = value.toLowerCase();
    //소문자일때도 가능하도록

  if(lower.includes('jquery')) break;
  if(lower === 'svg' || lower === 'jquery') continue;

  console.log(value);
}


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)