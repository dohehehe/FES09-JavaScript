/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b); //false

// 논리곱(그리고) 연산자 &&
let AandB = a && b ; 
console.log(AandB); // '' 

// 논리합(또는) 연산자 ||
let AorB = a || b ; 
console.log(AorB); // 10

      //logical or assignment 논리합 할당 연산자
      // a에 값에다가 비교 연산을 해서 True 값을 덮어씌어줘
      // a = a || b; 
      // a ||= b; 


// 부정 연산자
let reverseValue =!value; //true;



/* ---------------------------------- 조건 처리 --------------------------------- */

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false}; 
  // {thisIsFalsy:false}

      // [] 배열과 {} 객체의 안에 값이 없어도 true 라고 판단한다. 생성은 한 것이기 때문에. 
      // new Array 를 실행한 것이므로. 생성된 무언가가 반환된것이라. 

      // [] // array literal 방식
      // const a = new Array // array constructor 방식




// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsFalsy:true};
  // 2 // [2,3].length 가 반환되어서




/* ------------------------------ 논리 연산자 과제 풀이 ------------------------------ */

// 상황 
// console.log(userName); 으로 확인  
// 1. 사용자가 취소 버튼을 누른 경우 => null
// 2. 사용자가 ESC 버튼을 누른 경우 => null
// 3. 아무것도 입력하지 않았을 경우 => '' 
// 4. 띄어쓰기를 입력한 경우 => '   '  

let userName = prompt('누구신가요?');

// if(userName === 'admin'){
//   let password = prompt('비밀번호를 입력해 주세요.');
//   if (password === 'TheMaster'){
//     console.log('환영합니다!');
//   } else if (password === null || password.replace(/\s*/g,'') == ''){
//     console.log('취소되었습니다.');
//   } else {
//     console.log('인증에 실패하였습니다');
//   }
// } else if ( userName === null || userName.replace(/\s*/g,'') == ''){
//   console.log('취소되었습니다');
// } else {
//   console.log('올바른 사용자가 아닙니다!');
// }

      //정규표현식은 일단 '/ /'로 시작한다. 
      // /(…)/g 에서 g는 global 의 약자로 
      // 전체 문자열을 탐색해서 모든 일치를 반환하도록 지정하는 전역 탐색 플래그이다.
      // \s 모든 화이트스페이스를 찾는다
      // * 는 수량 한정자로 0개 이상을 의미
      // \s* 이므로 화이트 스페이스가 0개 이상 

      // .replace(pattern, replacement) 로 string의 매서드
      // 모든 공백을 찾아서 ''로 대체해줘



/* ---------------- userName과 password 에 대소문자 구별 없이 작동하도록 만들기 --------------- */

// if(userName?.toLowerCase() === 'admin'){
//   let password = prompt('비밀번호를 입력해 주세요.');
//   if (password?.toLowerCase() === 'themaster'){
//     console.log('환영합니다!');
//   } else if (password === null || password.replace(/\s*/g,'') == ''){
//     console.log('취소되었습니다.');
//   } else {
//     console.log('인증에 실패하였습니다');
//   }
// } else if ( userName === null || userName.replace(/\s*/g,'') == ''){
//   console.log('취소되었습니다');
// } else {
//   console.log('올바른 사용자가 아닙니다!');
// }

      // .toLowerCase()
      // .toUpperCase()
      // 이 둘을 쓸 경우 대문자 소문자 구분 없이 가능하다


      // 대신 문제는 입력값이 없을때에는 에러가 뜬다. 
      // userName에 null 이 담겼는데 여기에 .toLowerCase()를 쓰게 되어서 에러!
      // .toLowerCase() 는 string 매서드이기에 null 에서는 에러가 된다.

      // 대신 앞에 ? 를 붙여주면 가능 
      // userName?.toLowerCase() 
      // optional chaining 
      // ? 앞에 null 이나 undefined 가 뜨면 그 뒤의 매서드를 작동시키지 않는다. 


/* -------------------------------- 함수로 작성하기 -------------------------------- */
// 그 외의 방법으로는 함수를 사용할 수 있다.

function login(){

  let userName = prompt('아이디를 입력해 주세요');
  
  if(!userName || userName.replace(/\s*/g,'') === '') { 
    console.log('취소했습니다.'); 
    return; 
  }
  // 함수는 return 문을 만나면 해당 코드의 실행을 종료

  // 따라서 위의 if문에서 .toLowerCase()를 실행할 때에 
  // null 값에 에러가 뜨는 것에 대비해 userName?.-- 할 필요 없이
  // 코드 실행을 종료하기에 에러가 뜨지 않는다.

  
  if(userName.toLowerCase() === 'admin'){
    let password = prompt('비밀번호를 입력해 주세요.');

    if(password.toLowerCase() === 'themaster'){
      console.log('로그인 성공! 환영합니다~!');

    }else{
      console.log('비밀번호를 잘못 입력하셨습니다.');
    }
  }
  
  else{
    console.log('올바른 사용자가 아닙니다!');
  }
}

login();

// 함수로 작성할 경우 아이디 함수, 비밀번호 함수로 따로 분리한다. 



