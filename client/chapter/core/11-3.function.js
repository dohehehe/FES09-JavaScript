/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

//arguments 잘안씀

//spread syntax ...arr

/* -------------------------- 함수 선언 → 화살표 함수 (표현)식 -------------------------- */


let calcAllMoney = (...args) =>{
      //rest parameter 
      //함수의 파라미터 안에 쓰는 것을 지칭
      // 장점은 여러 매개변수 넣을 수 있음
      // 나머지를 사용할 수 도 있음

  let total = 0;

  // 하나 선택해서
  // for
    for(let i = 0; i < args.length ; i++){
      total += args[i];
    }

  // for..of
    for (let value of args){
        total +=value;
    }
    
  // forEach
    args.forEach( item => total+=item );

  // reduce
    args.reduce((acc,cur)=> acc + cur,0)
}

//단축
let calcAllMoney2 = (...args) => args.reduce((acc,cur)=> acc + cur, 0);

console.log(calcAllMoney2(10,30,40,50));
calcAllMoney(10,30,40,50)






/* ------------------------------ 화살표 함수와 this ------------------------------ */

// 자바스크립트 함수는 양면의 얼굴 (일반함수 / 생성자함수 New 키워드 붙여서 시작하는 거 )
// new 키워드를 붙이면 모두 객체를 생선한다 

// 화살표 함수는 조금 더 가볍다 
// 나는 일반함수를 만들어고 일반함수를 사용하길 원함. 
function button() {

}

const a = button() // undeifined / 일반함수
const b = new button() //생성자 함수 생성자 함수 쓸때 첫글자 대문자로 쓰기

//생성자로 만들때는 class로 설계 
class Button2{

}
const c = new Button2();




/* ----------------------- 객체 지향 프로그래밍 vs 함수 지향 프로그래밍 ----------------------- */
// 화살표 함수 = 일반함수에 사용(함수 중심 설계)
// 클래스 구문 = 성성자 함수에 사용 (객체 중심 설계)

//일반함수 
//this : 나를 호출한 대상을 this로 찾음

//화살표 함수 
//this : 가지고 있지 않음. 내 상위 영역에서 찾음

// 객체의 매서드를 정의할때 concise method 사용
// 매서드 안에서 함수를 정의할때 arrowFunction 효율적임


const user = {
  total:0,
  name:'박가희',
  age:9,
  address:'서울시 중랑구 면목동',
  grades: [80,40,15],
  totalGrades(){
    // const self = this;
    this.grades.forEach((item)=>{
      this.total += item
    })

    return this.total
    // console.log(this); // user
    
    // const sayHi = () => {
    //   console.log(this);
    // }
    
    // sayHi()
    
  }
}







/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;

//for 문을 사용해서 pow함수를 만들어보자 
  let pow = (x,n) => {
    let result = x;
    if ((typeof x) !== Number || typeof n !== Number ) {
      alert('숫자를 입력해주세요');
    } 
      for (let i = 1; i<n; i++){
        result *= x;
      }
    return result;
  }

//배열 반목문 
//코드 로직을 설계 -> 다양한 관점
  let powExpression = (numeric, powCount) => {
    return Array(powCount).fill(null).reduce((acc)=>{
      return acc * numeric
    }, 1)
  }
        //Array(Number); 을 넣게되면 공백이 그 갯수만큼 생긴다. 
        //.fill () 을 하면 그 공간에 특정값을 넣는다.
        // null 을 준 것은 임의로 공간을 비웠다고 명시적으로 알려줌 
        //누적값에서 numeric 값을 곱하겠다
        //초기값이 0 이면 곱해도 0 -> 따라서 1 넣음

  let powExpression2 = (numeric, powCount) => Array(powCount).fill(null).reduce((acc)=>{return acc * numeric}, 1)




// repeat(text: string, repeatCount: number): string;
let repeat = (text, repeatCount) => {
  let result = '';
  for (let i = 1; i < repeatCount; i++){
    result += text;
  }
  return result;
}

let repeat2 = (text, repeatCount) => Array(repeatCount).fill(null).reduce((acc)=>{return acc + text},'')

console.log(repeat2('3i4jofr',4));