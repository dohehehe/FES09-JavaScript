/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


/* --------------------------- 함수 선언 → 일반 함수 (표현)식 -------------------------- */
let calculateTotal = function(a,b,c){

  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열이라고 부른다. 
  console.log(arguments); // 순환시켜서 | 반복시켜서 값을 다 더하기

  let total = 0;

  /* ------------------------- 배열의 요소들의 합계를 구하는 다양한 방법 ------------------------ */
  // for 문 
    for(let i = 0 ; i < arguments.length; i++){
      total += arguments[i]
    }

  // for ...of
    for (let value of arguments){
      total +=value;
    }


  // 배열의 매서드 빌리기 //단점은 계속 빌려써야함
    Array.prototype.forEach.call(arguments,function(item){
      total += item;
    })

  // arguments의 부모를 배열로 바꿔치기 한다면?
    arguments.__proto__=Array.prototype;
    arguments.forEach(function(item){
      total +=item;
    });
        // forEach 배열의 매서드
        // arguments.forEach(); /함수를 실행한다는 것
        // arguments.forEach(function(item, index){});  / 콜백함수 실행


  //arguments 객체(유사배열) => 진짜 배열(array)
    // const arr = Array.from(arguments);
    // const arr = Array.prototype.slice.call(arguments); //옛날 익스플로러 시절
    const arr = [...arguments] 
          //spread syntax //전개구문
    console.log(arr); // [10, 20, 30, 40, 50, 60, 70, 80, 90]

    arr.forEach(function(item){
      total +=item;
    })
    // arr.forEach( item => total+=item ); // 화살표 함수로 변형 가능
    

/* ------------------ 배열의 매서드 array method ********** 매우 중요 ----------------- */
                    /* forEach => 값을 반환하지 않음. 반복의 로직만 처리 ------------------- */
                    /* reduce => 값을 반환함. 모든걸 다 ----------------------- */

                      //Array.map() 배열 내의 모든 요소에 대해 주어진 함수를 호출하고, 그 결과를 새로운 배열로 반환하는 메서드
                      //map => 배열을 반환함. 어떤 연산 과정을 하고 그 결과값을 새로운 배영로
                      const map = arr.map(a=> a*2)
                      console.log(map); // [20, 40, 60, 80, 100, 120, 140, 160]

                      //Array.filter() 주어진 함수의 테스트를 통과하는 모든 요소를 포함하는 새로운 배열을 생성
                      //filter => 배열을 반환함. 필터링을 해서 필요한 애들만 내보냄
                      const filter = arr.filter((a)=>{
                        return a >50
                      })
                      console.log(filter); // [ 60, 70, 80]

                          //map과 forEach 쓰는 것
                          const data = [
                            {
                              name:'tiger',
                              age:30,
                            },
                            {
                              name:'kindtiger',
                              age:20,
                            },
                            {
                              name:'seonbeom',
                              age:41,
                            }
                          ]
                    
                          const tag = data.map((d)=>{
                            return `<li> 이름 : ${d.name}</li>`
                          })
                          console.log(tag); // ['<li> 이름 : tiger</li>', '<li> 이름 : kindtiger</li>', '<li> 이름 : seonbeom</li>']
                    
                          tag.forEach((i)=>{
                            document.body.insertAdjacentHTML('beforeend',i)
                          }) // 마크업에 위 li 들이 추가됨
/* ------------------------------------ * ----------------------------------- */

  //.reduce(acc,cur); 
  total = arr.reduce(function(acc,cur){
    return acc + cur
  },0);
  // return arr.reduce((acc,cur)=>acc+cur)

    // accumualtor 누적값 
    // current 현재값 
    // 0 은 초기값으로 먼저 acc 로 들어간다 
      //초기값이 없다고 치면 10이 acc으로 들어간다
    // cur은 array의 아이템들이 들어간다. 제일 처음 값은 10 
    // 10의 더함 값은 다시 acc 로 간다

/* ------------------------------------ * ----------------------------------- */

  return total;                        

};

const result = calculateTotal(10,20,30,40,50,60,70,80);
console.log(result); //360








 /* --------------------------- 익명(이름이 없는) 함수 (표현)식 -------------------------- */
let anonymousFunctionExpression = function(){

}


 /* --------------------------- 유명(이름을 가진) 함수 (표현)식 -------------------------- */
let namedFunctionExpression = function hello(){

}


/* ------------------------------- 콜백 함수 (표현)식 ------------------------------ */
let cb = function(state,success,fail){
  if(state){
    return success()
  }else{
    return fail()
  }
};

cb( false, ()=> '성공', ()=> '실패',)

cb(
  false,
  function () {return '성공'},
  function () {return '실패'},
)


//예제
function movePage(url,success,fail){
  url.includes('www') ? success(url) : fail();
}

movePage(
  'https://www.naver.com',
  function (url){ //success에 들어가는 arguments
    console.log(`3초 뒤 해당 url인 ${url}로넘어갑니다.`);
    setTimeout(()=>{
      // window.location.href=url;
    }, 3000)
  },
  function (){ //fail에 들어가는 arguments
    console.error('잘못된 url 정보를 입력하셨습니다.');
  }
)





/* --------------------------- 함수 선언문 vs. 함수 (표현)식 -------------------------- */
// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression

//IIFE

//캡슐화(incapsulation)

//함수가 선언 됨과 동시에 실행되는 것을 말합니다. 
      // (function (){
      // })()

const MASTER = (function(){

  let uuid = 'asdlkfajieljFes'; //보호 

  return {
    getKey(){
      return uuid;
    }, 
    setKey(value){
      uuid=value
    }
  }
})();

console.log(MASTER.getKey());
      //MASTER 밖에서 단독으로 getKey나 setKey 함수를 사용할 수 없다






// import { css } from "../../utils/css.js";
// css()

/* -------------------------- 컨벤션을 유지하면서 css함수 사용하기 ------------------------- */
const css = (function(){
  
  function getStyle(node,prop){

    if(typeof node === 'string'){
      node = document.querySelector(node)
    }
    if(typeof prop !== 'string'){
      throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    }
    return getComputedStyle(node)[prop]
  }

  function setStyle(node,prop,value){
  
    if(typeof node === 'string') node = document.querySelector(node);
  
    if(typeof prop !== 'string'){
      throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    }
  
    if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');
  
    node.style[prop] = value
  }
  
  function css(node,prop,value){

    return (!value) ? getStyle(node,prop) : setStyle(node,prop,value)
    
    
  }
  

  return css;

})()

// 개발 팀장 : 박가희 getStyle, setStyle, css 이거 만들었으니까 가져다 쓰세용 근데,,get,set 함수는 쓰지 말고 css 함수만 사용하셔도 됩니다.
// 개발 인턴 : 박지성  getStyle() 작동은 잘됨. 컨벤션 깨짐 