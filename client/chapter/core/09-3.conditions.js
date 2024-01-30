/* ---------------- */
/* Switch           */
/* ---------------- */



/* --------------------------------- switch문 -------------------------------- */

const value = 10;

switch(value){
  case 10 : // if (value === 10)
    console.log('10입니다.');
    break;

  case 20 : // if (value === 20)
    console.log('20입니다.');
    break;

  default: // else
    console.log('난수입니다');
}

      //break가 없는 경우 
      //10입니다 20 입니다 가 연속으로 뜬다





/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = DAWN;


switch(thisTime){
  case MORNING :
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH :
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
    
  case DINNER :
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT :
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT :
  case DAWN :
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}





/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime === MORNING){
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH){
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER){
  console.log('동네 한퀴를 조깅한다.');
} else if (thisTime === NIGHT){
  console.log('친구에게전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN){
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} 





/* switch vs. if -------------------------------------------------------- */

// prompt를 통해 숫자를 입력 받는다 (0~6까지)
// switch case 문을 사용해서 

const number = +prompt('0~6까지의 숫자를 입력해주세요','');

      //switch문은 자료를 엄격하게 체크한다
      //prompt에 숫자를 입력하여도 string 으로 받기 때문에 
      //앞에 + (암시적 형 변환) 을 통해 숫자로 바꾸어줘야 한다.


switch (number){
  case 0 : console.log("월"); break;
  case 1 : console.log("화"); break;
  case 2 : console.log("수"); break;
  case 3 : console.log("목"); break;
  case 4 : console.log("금"); break;
  case 5 : console.log("토"); break;
  case 6 : console.log("일"); break;
}




/* ----------------------------------- 함수 ----------------------------------- */
//함수를 쓰는 이유 : 코드의 재사용성을 높이기 위해 => 매개변수의 활용
//관심사의 분리 separation of concerns
//함수는 하나의 기능만을 수행하는게 좋다 

function getRandom(n){
  return Math.floor(Math.random() * n);
}

      // Math.random(); // 0~0.99999~ 까지 나온다
      // Math.random() * 7 // 최대 수를 7미만으로 제한
      // Math.floor(); // 내림 
      // Math.round(); // 반올림

      //getRandom() 함수의 parameter 인자에 변수를 지정
      //그러면 유동적으로 랜덤하게 나올 값의 범위를 지정할 수 있음


      
function getDay(num){

  switch (num) {
    case 0: console.log('일'); break;
    case 1: console.log('월'); break;
    case 2: console.log('화'); break;
    case 3: console.log('수'); break;
    case 4: console.log('목'); break;
    case 5: console.log('금'); break;
    case 6: console.log('토'); break;
  }
  
}

const day = getDay(getRandom(7)); 
console.log(day); //undefined; 함수에서는 반환하는 값이 없으므로





 /* ------------------------------- 요일을 뽑아내는 함수 ------------------------------ */
//=> 요일을 가지고 월~금 : 평일입니다. 일,토 : 주말입니다. 

function getDay2(number){
  switch (number) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}
      //이상태에서는 break; 이 필요없음
      //함수에서는 return이 실행되면 뒤는 종료되기에 

function weekend(){
  const today = getDay2(getRandom(7));

  if (today.includes('토') || today.includes('일')){
    console.log(`오늘은 ${today}요일 이며 주말입니다`)
  } else {
    console.log(`오늘은 ${today}요일 이며 평일입니다`)
  }
      //삼항식으로 변경
      //return today.includes('토') || today.inclued('일') ? '주말입니다' : '평일입니다'
}

const result = weekend();
console.log( result ); //undefined;