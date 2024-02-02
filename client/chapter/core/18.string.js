/* -------------------- */
/* String Type          */
/* -------------------- */
// itterable 한 요소 
// for ...of 를 돌릴 수 있고 
// 배열처럼 순서를 특정할 수 있다. 하지만 변경은 안됨.

let message = 'Less is more.';


/* ------------------------------- length 프로퍼티 ------------------------------ */
let stringTotalLength = message.length;
console.log(stringTotalLength); //13


/* ---------------------------- 특정 인덱스의 글자 추출 ---------------------------- */
let extractCharacter = message[3];
console.log(extractCharacter); //s

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

message[3] = 'a'
console.log(message); // Less is more.



/* -------------------------------- 부분 문자열 추출 ------------------------------- */
  // 0번 부터 카운트 된다.
  //.slice 를 가장 많이 쓴다.

let slice = message.slice(1);
console.log(slice); //ess is more. 

let slice2 = message.slice(4,-1);
console.log(slice2); // is more
      // 형 판별때 사용
      // Object.prototype.String.call.slice(date);



let subString = message.substring(2,5);
console.log(subString); // ss

// let subStr = message.substr;
      //legacy 한 친구



/* ------------------------------ 문자열 포함 여부 확인 ------------------------------ */
/*  indexOf -------------------------------- */
let indexOf = message.indexOf('hi');
console.log(indexOf); // -1

let indexOf2 = message.indexOf('is');
console.log(indexOf2); //5

      // 해당 문자를 포함하고 있다면 위치를 알려줌 
      // 없다면 -1 을 출력함 


// 사용 브라우저 판단 함수
function checkBrowser(){

  const agent = window.navigator.userAgent.toLowerCase();
      // 사용 브라우저 판단
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1 : browserName = 'MS Edge'; break;
    case agent.indexOf('chrome') > -1 && !!window.chrome : browserName = 'chrome'; break;
    case agent.indexOf('safari') > -1 : browserName = 'Apple Safari'; break;
    case agent.indexOf('firefox') > -1 : browserName = 'FireFox'; break;
    case agent.indexOf('trident') > -1 : browserName = 'IE'; break;
  }
  
  return browserName;
}


/* lastIndexOf ------------------------------ */
// 뒤에서 부터 찾는 것
let lastIndexOf; 


/* includes -------------------------------- */
let includes = message.includes('less');
console.log(includes); // false


/* startsWith ------------------------------- */
// 앞글자가 무엇으로 시작하는지 확인하고 불린값 반환
let startsWith = message.startsWith('Less');
console.log(startsWith); // true


/* endsWith -------------------------------- */
// 뒷글자 확인
let endsWith = message.endsWith('more');
console.log(endsWith); // false





/* --------------------------------- 공백 잘라내기 -------------------------------- */
/* trim ---------------------------------- */
let str = '             a     b       c               d   '

let trimLeft = str.trimLeft();
console.log(trimLeft); //'a     b       c               d   '

let trimRight;
let trim = str.trim(); // '             a     b       c               d'

//왼쪽과 오른쪽 공백만 삭제함
console.log(trim); // 'a     b       c               d'



/* 정규표현식 --------------------------------- */
let reg = str.replace(/\s*/g,'');
      // 모든 공백 다 찾아라
      // 그리고 '' 로 대체해
console.log(reg); // abcd

function normalText(string){
  return string.replace(/\s*/g,'');
}






/* --------------------------------- 텍스트 반복 --------------------------------- */
let repeat = message.repeat(3); 
console.log(repeat); // Less is more.Less is more.Less is more.





/* --------------------------------- 대소문자 변환 -------------------------------- */
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();






/* ---------------------------- 텍스트 이름 변환 유틸리티 함수 --------------------------- */
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}
      // 공백을 찾고 또는 - 또는 _ 을 찾고 한 번 묶어서 나머지 공백과 공백 바로 옆의 단어를 선택해서
      // 콜백함수를 쓰는데 이 매개변수에는 찾은 모든 것들이 담긴다
      // 찾은 대상들에게 trim으로 공백을 제거하고 , 대문자로 바뀐다.

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}



/* -------------------------------- padStart -------------------------------- */
// 최대 length를 제한하고 
// 그것을 채워넣는 문자를 넣을 수 있다.

let padStart = '1'.padStart(5,'0')
console.log(padStart); // 00001
