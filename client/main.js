/* global getNode, insertLast, clearContents, getNodes */

/* -------------------------------------------------------------------------- */
/*                                  모듈 프로그래밍                               */
/* -------------------------------------------------------------------------- */




/* ------------------------- named export (이름 내보내기) ------------------------- */
// 중괄호가 있는 것 
// 여러개 -> { 이름 }

      // import {getNode, getNodes, insertLast} from './lib/dom/index.js'
      // import {refError} from './lib/error/index.js'



/* ------------------------ default export( 기본 내보내기 ) ----------------------- */
// 중괄호가 없는 것
// 무조건 하나만 내보내기 -> 이름
// next.js 
// 함수 여러개일때는 안됨

      // import clearContents from "./lib/dom/clear.js" // 기본 내보내기 

import {getNode, getNodes, insertLast, refError, clearContents} from './lib/index.js'








/* -------------------------------------------------------------------------- */
/*                                   계산기 만들기                                  */
/* -------------------------------------------------------------------------- */


function phase1(){
  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');

  const button = getNode('#clear');
  const result = getNode('.result');


  // 값을 비우는 util 함수
  function clearContents(node){
    if(typeof node === 'string') node = getNode(node);
    if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'){
      // tagName 이 반환하는 것이 대문자이다

      node.value = ''
      return;
    }

    node.textContent = ''
  }


  function handleInput(){
          // Input에서 받아오는 값은 Stirng이다.
          // 따라서 숫자형으로 변환이 필요
    const total = Number(first.value) + Number(second.value) ;



          // 하지만 덧셈 연산 진행 시 숫자형 연산이 아닌 접합이 일어나는데
          // 그 이유는 result 에 '-'문자가 있기때문이다
          // 그래서 이벤트 발생때마다 값을 비워준다

          // util 함수로 만들어 사용
    // result.textContent = '';
    clearContents(result);

    insertLast(result,total);
  }



  function handleClear(e){
    e.preventDefault();

    // first.value = ''
    // second.value = ''
    clearContents(first);
    clearContents(second);
    result.textContent='-'
  }



  first.addEventListener('input', handleInput );
  second.addEventListener('input', handleInput );

  button.addEventListener('click', handleClear);
}






/* --------------------------------- 이벤트 위임 --------------------------------- */


const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));
      // Array.from(); 은 유사배열객체나 iterable(순회가능한) 객체를 배열로 변환해준다
      // [input#firstNumber, input#secondNumber]

      // 이벤트 위임
function handleInput(e){

  const total = numberInputs.reduce((acc,cur)=>acc + Number(cur.value),0)

  console.log(e.target); // 입력되는 해당 인풋만
  console.log(this); // 입력되는 인풋 -> caluclator(이벤트를 핸들링하는 요소)

  clearContents(result);
  insertLast(result,total);
}

function handleClear(e){
  e.preventDefault();

  numberInputs.forEach(clearContents)
        //forEach로 모든 요소를 돌며 clearContents를 실행

  result.textContent = '-'
}

calculator.addEventListener('input',handleInput);
      // 이벤트 위임
      // 맨 바깥쪽의 calulator에 이벤트를 위임하여
      // calulator 내에서 input 이벤트가 발생할 때 마다 함수 호출

clear.addEventListener('click',handleClear);