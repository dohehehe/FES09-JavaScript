/* --------------- */
/* While Loop      */
/* --------------- */


/* ----------------------------------- 반복문 ---------------------------------- */
let a = 10;

while(a){
  console.log(--a);
}
// 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
      
      //--a 선감소여서 a가 9부터 나옴 
      //a가 boolean으로 변환되면서 0에 도달했을때 false로 전환되며 반복문 멈춤




/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

// console.log(frontEndDev[0]); //'HTML'
// console.log(frontEndDev[1]); //'CSS'
// console.log(frontEndDev[2]); //'SVG'
// console.log(frontEndDev[3]); //'JavaScript'
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

let i = 0;

while( i < frontEndDev.length ){
  const value = frontEndDev[i];
  // console.log(value);
  i++;
}
      // i < 7 문제점은 배열 안의 개수가 늘어나면 곤란
      // 그래서 frontEndDev.length 로 길이를 선택 설정





// while 문 (역순환 : 역방향)

let l = frontEndDev.length -1;

while(l >= 0){
  const reversedValue = frontEndDev[l];
  console.log(reversedValue);
  l--;
}


// 성능 진단 : 순환 vs. 역순환
// 역방향이 더 성능이 좋음