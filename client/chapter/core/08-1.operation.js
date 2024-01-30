/* ---------------- */
/* Operators        */
/* ---------------- */

/* ----------------------------------- 연산자 ---------------------------------- */
// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';



// 단항 연산자
let unary = +a;
console.log(unary); // 10



// 이항 연산자
let binaryFalse = a + b;
console.log(binaryFalse); //"1030"

let binary = +a + +b;
console.log(binary); //40



// 삼항 연산자 (!많이쓴다!)
let ternary = a > 10 ? '크다' : '작다';

console.log(ternary); //  "작다"

// 동일한 if문
let ifStatement;
if (a > 10) {
  ifStatement = '크다';
} else {
  ifStatement = '작다';
}

console.log(ifStatement); // "작다"




/* --------------------------------- 산술 연산자 --------------------------------- */

// 산술 연산자: 덧셈
let addition = 1 + 2; // 3

// 산술 연산자: 뺄셈
let subtraction = 10 - 2; // 8

// 산술 연산자: 곱셈
let multiplication = 10 * 3; // 30

// 산술 연산자: 나눗셈
let division = 10 / 2; // 5

// 산술 연산자: 나머지
let remainder = 10 % 3; 
console.log( remainder ); //1

  if( a % 2 === 0){
    console.log('짝수입니다.');
  }

// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1;
console.log(power);

console.log(Math.pow(2, 53) - 1 == Number.MAX_SAFE_INTEGER); //true



// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
// 더하기는 예외~
let coercionTypeConversion = '9' * '3';
console.log(coercionTypeConversion); //27


// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];        // [1,2,34,5,6]

//.concat([]); 은 배열의 내부 값으로 넣어준다.
let onlyWorkDefaultValues2 = [1, 2, 3].concat([4, 5, 6]); // [1,2,3,4,5,6]




const first = [1, 2, 3];
const second = [4, 5, 6];

//spread syntax 전개구문
console.log(...first, ...second);            // 1 2 3 4 5 6 /숫자형 나열
console.log([...first, ...second]);          // [1,2,3,4,5,6] /다시 배열로 변환
console.log([...first, ...second, 7, 8, 9]); //[1,2,3,4,5,6,7,8,9]

//rest parameter
function sum(...rest) {
  console.log(rest);
}
// 정해지지 않은 수의 매개변수를 배열로 받을 수 있습니다.




// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // ?

    let total = count % 4; // total = 2
    count = count / 2      // count = 5
    let pow = count ** 3;  // 125 // 이미 변환된 count 값을 받았기 때문에
    total = total * count + pow; // 2 * 5 + 125 = 135





/* ------------------------------ 연산자 우선 순위 ------------------------------ */
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)



/* ------------------------------- 선,후 증감 연산자 ------------------------------- */
// ++, --

let counter = 0;

console.log(counter++); // 0
console.log(counter); // 1

//counter = counter + 1;
//counter +=1; //복합 할당 연산자

