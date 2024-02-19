
import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { tiger } from './tiger.js';
import { isNumber, isObject } from './typeOf.js';
import { xhrPromise } from './xhr.js';


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  successMessage: '성공입니다',
  errorMessage: '실패입니다',
}



export function delayP(options){ // delayP의 매개변수가 길어지니 객체로 받기로

  // 객체의 얕은 복사 수행
  // 왜냐하면 그냥 가져다 변수에 할당에 쓰면 참조복사가 되어 값이 바뀔 위험!
  // let 으로 선언한 이유는 아래에 재할당이 필요해서
  let config = {...defaultOptions};

  // options : number | object
  // timeout 프로퍼티만 받는 것을 상정하여 
  // 매개변수로 오는 인수의 타입이 숫자라면
  // config(defaultOptions 객체를 얕은 복사한 변수)에 프로퍼티 값으로 추가
  if(isNumber(options)){
    config.timeout = options;
  }


  // 만약 객체라면 options를 뒤로 전개해 복사하여 값을 덮어씌운다
  if(isObject(options)){
    config = {...defaultOptions, ... options};
  }


  let {shouldReject, successMessage, errorMessage, timeout} = config;
  // 구조분해할당

  return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
      if(!shouldReject){
        resolve(successMessage)
      } else {
        reject(errorMessage);
      }
    }, timeout);
  })
}


delayP(2000)
.then((res)=>{
  console.log(res); 
  // 여기만 '성공'
  
  // return delayP(1000);
})
.then((res)=>{
  console.log(res); 
  // 나머지는 undefined' 왜냐하면 then 은 비어있는 promise만 반환하기 떄문에 // 수행하게 하고 싶으면 인수채워서 다시반환
    
  return delayP(1000);
})
.then((res)=>{
  console.log(res);
  return delayP(1000);
})











/* -------------------------------------------------------------------------- */
/*                                async, await                                */
/* -------------------------------------------------------------------------- */

// async : 함수의 리턴값을 무조건 Promise<Object> 로 전달


// async function 라면끓이기(){
//   console.log('물');
//   await delayP();

//   console.log('스프');
//   await delayP();


//   console.log('면');
//   await delayP();

//   console.log('그릇');
//   await delayP();
// }

// 라면끓이기();



// async function getData(){
//   const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/245');

//   const imgSrc = data.sprites.other.showdown['front_default'];
//   insertLast('h1', `<img src="${imgSrc}" alt="">`)


// }


async function getData(){
  
  const response = await tiger.get(`https://pokeapi.co/api/v2/pokemon/120`);

  const imgSrc = response.data.sprites.other.showdown['front_default'];

  insertLast('h1',`<img src="${imgSrc}" alt="" />`)
  
}
// getData();


