/* --------------------- */
/* Type Conversion       */
/* --------------------- */



/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(YEAR);            // 2024

console.log(String(YEAR));    // "2024"       // 명시적 형 변환
console.log(YEAR + '    ');   // "2024     "  // 암시적 형 변환

console.log((YEAR + '   ').trim()); //"2024"  // 암시적 형 변환
//value.trim(); //문자열을 위한 함수. 띄어쓰기를 잘라 버린다


// undefined, null
let days = null;
let weekend;

console.log(days);         // null
console.log(days + '');    // "null"  // 암시적 형 변환
console.log(String(days)); // "null"  // 명시적 형 변환

console.log(weekend);      // undefined
console.log(weekend + ''); // "undefined"


// boolean
let isClicked = false;

console.log(isClicked);      // false
console.log(isClicked + ''); // "false"





/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(friend);         // undefined
console.log(Number(friend)); // Nan


// null
let money = null;
console.log(money);         // null
console.log(Number(money)); // 0


// boolean
let cutie = true;
console.log(Number(cutie)); //1

let bad = false;
console.log(Number(bad));  //0


// string
let num = '250';
console.log(num);         // "250"
console.log(Number(num)); // 250   // 명시적 형 변환
console.log(num * 1);     // 250   // 암시적 형 변환


// numeric string
const width = '105.3px';

console.log(Number(width));      //Nan

console.log(parseInt(width));    // 105   // 정수로 반환한다
console.log(parseFloat(width)); // 105.3  // 소수로 반환한다

			//주의점은 앞에 문자가 들어가면 Nan
			const width2 = 'a105.3px'; 
			console.log(parseInt(width2));    // Nan
			
			// 중간에 문자가 들어가면 그 문자 중심으로 뒤를 잘라버린다
			const width3 = '10a5.3px';
			console.log(parseInt(width3));    // 10





/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(friend));   // false
console.log(Boolean(money));    // false
console.log(Boolean(''));       // false // 빈문자 -> '' / 공백문자 -> '    ';




/* ---------------------------------- 이외의 것 --------------------------------- */

// 위에 나열한 것 이외의 것들

const value = prompt('값을 입력해주세요');

console.log(value);               // 문자형으로 반환됨
console.log(value + 50);          // "value50" // 그냥 뒤에 50 이 붙는 문자형이 됨
console.log(Number(value) + 50);  // value(숫자일경우) + 50의 계산 값 // 명시적 형 변환
console.log(value * 1 + 50);      // 위와 같음 // 암시적 형 변환 


// 범용성과 재사용성 고려

const value2 = +prompt('값을 입력해주세요');
// value 가 계속 숫자의 형태로 사용된다면 위를 추천.

const numberValue = +value;
// 위 의 방법도 있어서 문자형이 필요할때는 그냥 value 를
// 숫자형이 필요할때는 numberValue 를 사용