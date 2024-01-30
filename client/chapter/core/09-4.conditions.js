/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */


/* ---------------------------------- ??연산자 --------------------------------- */

let emailAddress = 'doheerlob@gmail.com';
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}




// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@compnay.io' : emailAddress;





// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';





/* ?? vs. || ----------------------------------------------------------- */

// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환


const WIDTH = '10px';
const boolen = false;

console.log( null || WIDTH );  // 10px;
console.log( null ?? WIDTH );  // 10px; 

console.log( undefined || WIDTH ); // 10px
console.log( undefined ?? WIDTH ); // 10px

console.log( boolen || WIDTH ); // 10px
console.log( boolen ?? WIDTH ); // false 
      //??연산자는 정의된 값을 찾기 때문 
      //boolean 에는 false 라는 값이 정의되어 있기에 반환
      //아래도 같은 이유

console.log( '' || WIDTH ); //10px
console.log( '' ?? WIDTH ); //''

console.log( 0 || WIDTH ); //10px
console.log( 0 ?? WIDTH ); //0