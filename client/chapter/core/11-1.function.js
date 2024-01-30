/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);



// 함수 선언
function calcPrice(priceA, priceB, priceC=0, priceD){
  if(!priceD) priceD = 0;
  priceD = priceD || 0;
  priceD ||= 0;
  priceD = priceD ?? 0;
  priceD ??= 0;
      //위에 중 하나 선택해서 사용 가능


      // validation 확인 
  if(!priceA || !priceB){
    throw new Error('calcPrice 함수의 첫 번째와 두번째 인수는 필수 입력값 입니다.')
  }
  
  console.log(priceA + priceB + priceC + priceD);

}

// 함수 호출
// 함수 값 반환
calcPrice(1000, 500, 1500, 3000); //argument
calcPrice(1000, 500, 1500); // Nan 
      //priceD = undefiened 숫자형 계산이 안됨
      //오히려 null 이였으면 0이 되서 계산 가능
      // default parameter를 0으로 지정하니 이제 계산 가능

calcPrice(1000, 300); // 1300;



/* ----------------------------------- 랜덤값 ---------------------------------- */



// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string; 
      //typescipt 문법이다
  // rem(20) // '1.25rem'
  // rem('25px') // '1.5625rem'
  // rem('30px',10) // '3rem' 
  // rem() // 에러값 내보내기


function rem (pxValue, base=16){

  if(!pxValue) throw new Error('rem 함수의 첫번째 인수는 필수 입력 값입니다.')

  pxValue = parseInt(pxValue, 10);
  base = parseInt(base, 10);

      //if(typeof pxValue === 'string') pxValue = parseInt(pxValue,10);
      //typeof pxValue === 'string' && (pxValue = parseInt(pxValue, 10);)
      //이렇게도 가능하다

  return pxValue/base + 'rem';
}


console.log(rem(20));
console.log(rem('25px'));
console.log(rem('30px',10));
// console.log(rem()); 



// Test Driven Development 

console.assert(rem(20) === '1.25rem');
      //console.assert()는 단정짓는거다.
      //error 가 안나면 통과
console.assert(rem('25px') === '1.5625rem');










/* ----- css(node: string, prop: string, value: number|strung) : string; ---- */

      //함수 만들때 팁은 실행부를 먼저 생각해보기

function getStyle(node,prop){
  
  //validation 확인작업을 하는 것
  if(typeof node === 'string'){
    node = document.querySelector(node);
  }

  if(typeof prop !== 'string'){
    throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }

  return getComputedStyle(node)[prop]
      //  getComputedStyle()[]; 스타일을 선택하는 것 

}


//querySelector
const first = document.querySelector('span');
console.log(first); // <span class="first">hello</span>

      // querySelector 은 제일 처음 만나는 대상 만 찾아옴
      // 그런데 querySelectorAll 은 모든 태그를 찾아온다

const second = document.querySelectorAll('span');
console.log(second); // [span.first, span.second]
      // 이 형태는 배열처럼 보인다. 하지만 NodeList로 유사 배열이다. 


      // 두번째를 선택하고 싶으면 '('span:nth-child(2)')'
const third = document.querySelectorAll('span:nth-child(2)');
console.log(third); // [span.second]



      //document.getElementByTagName('span');
      //유사배열, getElement 는 오래된 것. 지금은 많이 사용하지 않는다.


const size = getStyle('.first','fontSize');
console.log(size); // 32px





/* ---------------------------- computed property --------------------------- */
//setStyle('.first', 'color', 'red')

function setStyle(node, prop, value){
  //validation
  if(typeof node === 'string') node = document.querySelector(node);
  if(typeof prop !== 'string') {
    throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');

  node.style[prop] = value
      // computed property
      // 점 표기법, 대괄호 표기법
      // 대괄호 표기번은 보통 변수를 
      // 점 표기법은 변수를 사용할 수 없다
}

console.log(setStyle('.first','color','blue')); //파란색으로 바꾼다



function css (node, prop, value){
  // if(!value){
  //   getStyle(node,prop)
  // } else{
  //   setStyle(node,prop,value);
  // }

  // if(!value){
  //   return getStyle(node,prop) //어차피 return 값을 만나면 함수가 종료되니까 
  // } 
  //   setStyle(node,prop,value);

    return (!value) ? getStyle(node,prop) : setStyle(node,prop,value);
      //삼항식은 값을 반환하기 때문에 좋음! 자주쓴다 
}






//validation
  // node의 값을 'h1'으로 받았을 경우 
  // node가 없거나 document.ELEMENT_NODE가 아닐 경우
  // prop의 값이 string이 아닐 경우
  // prop의 값이 sytle 속성이 아닐 경우 
  // value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.

