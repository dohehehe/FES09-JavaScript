/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* ------------------------------- 모든 노드에서 사용 ------------------------------- */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling


/* ----------------------------- 요소 노드에서만 사용 가능 ----------------------------- */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling




/* -------------------------------- 문서 대상 찾기 -------------------------------- */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


const first = document.querySelector('.first');
const spanList = document.querySelectorAll('span');

console.log(first); // span.first
console.log(spanList); // [span.first, span.second]




/* getNode 와 getNodes 를 utill 함수 ------------------ */

// querySelector 를 편하기 하기 위한 utill 함수
function getNode(node, context = document){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.')
  }

      //DOCUMENT_NODE = 9 
  if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
    console.log(context);  //h1을 담은 Element NODE, DOCUMENT_NODE로 변환된건 아님
      // context 범주 안에서 node 를 한정해서 찾는다.
  }


  return context.querySelector(node);
}


console.log(getNode('.first', 'h1')); // span.first






// qeurySelectorALL 모두를 가져오는 것
function getNodes(node, context = document){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.')
  }
      //DOCUMENT_NODE = 9 
  if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
  }
  return context.querySelectorAll(node);
}










/* -------------------------------- 문서 대상 확인 -------------------------------- */
// - matches
// - contains

// target에 selector 가 있어? 
console.log(first.matches('span') ); // true

// h1태그안에 .second라는 자식이 있어?  
console.log(getNode('h1').contains(getNode('.second'))); //true