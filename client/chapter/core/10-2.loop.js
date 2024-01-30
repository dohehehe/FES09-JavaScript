/* -------------------- */
/* Do While Loop        */
/* -------------------- */

let i = 0;

do {
  console.log(i);
  i++
} while(i<5)


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력


let repeat = prompt('몇 번 돌릴까요?',0);

do {
  console.log(repeat);
  if(repeat === '') break;
} while (repeat--)

// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단
// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정





/* ------------------------ script 위치에 따른 작동방식과 nodeType ------------------------ */



let first = document.querySelector('.first');

console.log(first); 
      //html 내에서 script가 body 보다 위에 있으면 null 값이 나온다.
      //script가 실행될때 아직 body가 작성하지 않았기 때문에
      //body 맨 아래로 내리면 해결됨

      //위에 그대로 두고 하고 싶다면 script 뒤에 defer 를 추가하면 됨
      //<script src="./chapter/core/10-2.loop.js" defer></script>
      //비동기 동작 방식
      //html을 읽는 도중 동시에 script를 작성한다. 
      //그리고 hmtl을 다 읽고 나서 script를 실행





console.log(first.nodeType); 
      //DOM(화면)에서 가장 작은 단위를 node라 한다(node.js 랑 다름)
      //태그, 공백, 주석 등 

      //1
      //element를 가리킨다

      //first.nextSibling 
      //하면 텍스트가 나옴. .second가 나오지 않음
      //왜냐면 개행, 띄어쓰기도 javascript는 읽기 때문에
      //그럼 first.nextSibling.nextSibling 해야됨

      //근데 중간에 주석이 들어가도 작동하지 않음. 






/* --------------------------- 반복문 do ~while 통해 다음 elements 선택하기 --------------------------- */

do {
  first = first.nextSibling;
} while(first.nodeType !== document.ELEMENT_NODE)

//       // 1 이라 해도 됨
//       //first.nextSibling 의 nodeType이 Element_node가 될때까지 반복

console.log(first);
//       //span.second 가 됨




/* ----------------- 반복문 do ~while에 함수를 더하여 다음 elements 선택하기 ---------------- */

function next(node){
  do{
    node = node.nextSibling;

  } while(node.nodeType !== 1 )

  return node;
}

const second = next(first);
console.log(second);


      //근데 이거 말고 first.nextElementSibling 라는 업데이트된 것을 사용해도 됨



/* ------------------------------- 이전 요소 선택하기 ------------------------------- */
// prev(second) => first

function prev(node){
  if(typeof node === 'string'){
    node = document.querySelector(node);
  } //이렇게 하면 쿼리셀렉터로 매번 할당없이 클래스 이름만으로 하게됨

  do{
    node = node.previousSibling;
    if(!node) throw new Error('선택한 ELEMENT의 이전 요소는 존재하지 않습니다.')
      //불린값으로의 암시적 변환
      //node값이 없을때에는 false값이 되는데 
      //여기에 !가 붙어있기에 true값으로 전환되고 if문을 수행한다. 

  } while (node.nodeType !==1)
  return node;
}

console.log(prev(second)); //first 클래스 출력
console.log(prev(first)); //위의 에레메세지 출력


