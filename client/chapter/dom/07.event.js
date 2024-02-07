/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* ----------------------------- 이벤트 핸들링 3가지 방법 ----------------------------- */

const first = getNode('.first');


/* 1. HTML 속성 : onclick="handler()" -------------------- */
/* 2. DOM 프로퍼티 : element.onclick = handler ---------------- */

function handler(){
  console.log('클릭 이벤트 발생!');
}

//       first.onclick = handler
      // 실행해서 넘기지 않는다!
      // handler() 로 할 경우 실행해서 함수결과값을 넘기는 것이라 undefined가 출력;




/*  3. 메서드 : element.addEventListener(event, handler[, phase]) ------- */
// bindEvent util 함수 만들기



function bindEvent(node,type,handler){

  if(typeof node === 'string') node = getNode(node);

  node.addEventListener(type,handler);

  return () => node.removeEventListener(type,handler);
      // 클로저
      // 결과값으로 함수가 떨어짐


}

const remove = bindEvent('.first','click',handler);
      // 변수 remove는 () => node.removeEventListener(type,handler); 
      // 함수 그 자체를 할당받았다
      // 이때 bindEvent의 매개변수에 각각의 값이 할당되어서
      // return 값으로 받은 함수의 매개변수로 들어갈 수 있다. 
      // = () => first.removeEventListener('click', handler); 가 된다
      // 이것이 클로저. 본래라면 bindEvent에서의 매개변수가 스코프 밖으로 올 수 없는데 가능해짐

      // 그리고

      

getNode('.deleteEvent').addEventListener('click',remove)
      // 이제 remove 함수를 실행하게 되니
      // 본래 버튼을 누르면 



// function bindEvent(node,type,handler){

//   if(typeof node === 'string') node = getNode(node);

//   node.addEventListener(type,handler);

//   return () => node.removeEventListener(type,handler);
//       // 클로저
//       // 결과값으로 함수가 떨어짐 
// }

// const remove = bindEvent('.first','click', handler);
// console.log(remove); //() => node.removeEventListener(type,handler)

// getNode('.deleteEvent').addEventListener('click', remove);
      

// first.addEventListener('click', handler);

// getNode('.deleteEvent').addEventListener('click',()=>{
//   first.removeEventListener('click', handler);
// })






/* ------------------------------- 축구공 이벤트 만들기 ------------------------------ */

const ground = getNode('.ground');
const ball = getNode('#ball');


function handleBall({offsetX:x, offsetY:y }){
  // 매개변수로 e(객체)를 받자마자 구조분해를 적용할 수 있음
  // 대신 프로퍼티는 못 받기 때문에 따로 추가해야함
  // const {offsetX:x, offsetY:y } = e; // 객체 구조 분해 할당
        // const x = e.offsetX;
        // const y = e.offsetY;

  console.log(x,y);
  ball.style.transform = `translate(${x - (ball.offsetWidth /2)}px, ${y - (ball.offsetHeight /2)}px)`

  console.log(ball.offsetWidth, ball.offsetHeight);
}

// ground.addEventListener('click',handleBall);


function handleEmotion({offsetX:x, offsetY:y}){

  console.log(x,y);
  ball.style.transform = `translate(${x - (ball.offsetWidth /2)}px, ${y - (ball.offsetHeight /2)}px)`
}

// ground.addEventListener('mousemove', handleBall);




// 이벤트를 내가 원하는 시점에 1번만 실행 | 원하는 시간에 맞춰 실행
// throttle, debounce

let timeout;

function debounce(){

}

debounce(()=>{

}, 1000)





/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener