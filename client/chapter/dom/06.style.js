/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* ----------------------- 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ----------------------- */

const first = getNode('.first');



/* className – -------- */
// 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용 

console.log(first.className);    //getter
      // first.className = 'fff' // setter
      // first.className = ''    // 전체삭제





/* classList –  --------- */
// 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('hello');
first.classList.remove('hello');
// first.classList.toggle('is-active');
    // toggle은 해당 class가 있을때는 없애주고 없을때는 만들어주는 메서드





/*  addClass, removeClass, toggleClass 의 util 함수 만들기 ------------ */

function addClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string' || typeof value !== 'string') throw new Error('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  node.classList.add(className);
}

function removeClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  if(!className){
    node.className = '';
    return;
  }

  if(typeof prop !== 'string' || typeof value !== 'string') throw new Error('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  node.classList.remove(className);
}

function toggleClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string' || typeof value !== 'string') throw new Error('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  node.classList.toggle(className);
}


addClass('.first', 'second');
addClass('.first', 'third');
removeClass('.first', 'third');
removeClass('.first');











/* -------------------------------- 스타일 변경 방법 ------------------------------- */

/*  style.cssText ----------------------------- */
//  "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.cssText = `
  display:flex;
  margin: 10px;
  border: 1px dotted red;
`

first.style.background = 'orange' ;                      // setter

console.log(getComputedStyle(first)['backgroundColor']); //getter





/* getComputedStyle(element, [pseudoElement]) `읽기 전용` ---------- */
// utill 함수로 돌리기

function getCss(node, prop) {
  if(typeof node === 'string') node = getNode(node);
  if(!(prop in document.body.style)) throw new SyntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');

  return getComputedStyle(node)[prop];
}



function setCss(node, prop, value){
  if(typeof node === 'string') node = getNode(node);
  if(!(prop in document.body.style)) throw new SyntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
  if(!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');
  node.style[prop] = value;
      //.prop 은 받아올 수 없다!
}




const css = (node,prop,value) => !value ? getCss(node,prop) : setCss(node,prop,value)