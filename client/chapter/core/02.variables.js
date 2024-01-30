/* ------------------ */
/* Variables          */
/* ------------------ */

let admin;
let name;
name = 'John';
admin = name;
alert(admin);
/* name에 세로선이 들어가는 이유는 윈도우 내장으로 window.name 이 들어가 있어서 경고
      window.name 을 불러오면 덮어쓰여지지는 않고 그대로 빈칸으로 나온다
      대신 var name; 으로 선언하면 변경됨.  */

const ourPlanetName = 'Earth';
const currentOnlineUserName = 'dohee';

// 만약 생일을 인풋으로 받는 경우는 소문자 상수가 더 나을 수 있음.

/* -------------------------------------------------------------------------- */
/*                                    실습 코드                                 */
/* -------------------------------------------------------------------------- */

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

/* variables ----------------------------------------------------------- */
let calcProductPriceByQuantity; // - 갯수 별 상품 가격 계산하기
let totalProductPrice; // - 구매 제품 가격의 총 합

let isPayment = false;
      // - 구매 결제 여부
      // is... false... => ture | false

let paymentList; // - 구매 결제 내역
let fortuneOfToday = 'good'; // - 오늘의 운세

/* constant variables -------------------------------------------------- */
const DAY_PER_YEAR = 365; // - 1년 기준 일(day)자 수
const BRAND_PREFIX = 'nike'; // - 브랜드 접두사
const productInfo = ''; // - 상품 정보
