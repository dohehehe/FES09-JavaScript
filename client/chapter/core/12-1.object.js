/* --------- */
/* Object    */
/* --------- */


/* -------------------------- Primitives vs. Object ------------------------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  ["min-height"]: '280px',
  transform: 'translate(-50%, -50%)',
}


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
      // authorization 권한
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uuid: crypto.randomUUID(),
  name: 'dohee',
  email: 'doheerlob@gmail.com',
  isSignIn: false,
  permission: 'paid' // paid || free
}



/* -------------------------------- 점(.) 표기법 -------------------------------- */
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// getter 읽기
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);

// setter 설정하기
console.log(authUser.permission = 'free'); // free

console.log(authUser.phoneNumber); 
      // 없는 키 값을 찾으면 undefined 을 찾고 에러를 보내지 않음 
      // validation
      // if(!authUser.phoneNumber){   }



/* ------------------------------- 대괄호([]) 표기법 ------------------------------ */

// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);

// setter
console.log(authUser['permission'] = 'free'); // free




/* ---------------------- 해당 객체에 키값의 여부를 확인하는 방법 => in ---------------------- */
// 프로퍼티 포함 여부 확인
// 프로퍼티 나열


Object.prototype.nickName = 'tiger';

for (let key in authUser){
  if(Object.prototype.hasOwnProperty.call(authUser,key)){
    console.log(key);
  }
}


// 객체의 key만을 모아놓은 배열
const keyList = Object.keys(authUser);
console.log(keyList);

function keys(obj){
  let result = [];
  for(let key in obj){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
      result.push(key) //obj[key]를 하면 값을 담은 배열이 탐생 //쌍으로 만들려면 [key, obj[key]]
    }
  }
  return result;
}

keys(authUser); // ['uuid', 'name', 'email' ...]


// 객체의 value만을 모아놓은 배열
const valueList = Object.values(authUser);
console.log(valueList);

// 객체의 key와 value의 쌍을 배열로
const keyValue = Object.entries(authUser);
console.log(keyValue);




/* ---------------------- 계산된 프로퍼티 (computed property) ---------------------- */
let calculateProperty = 'phone'; // phone | tel
    //[calculateProperty]는 변수 calculateProperty의 값에 따라 'phone' 또는 'tel'이 된다 

function createUser(name,age,phone){
  return {
    name,
    age,
    [calculateProperty]:phone,
  }
}




 /* ---------------- 프로퍼티 제거(remove 비워두기) or 삭제(delete 없애버리기) ---------------- */
// 제거는 value 값을 비워두는 것 null 로 
// authUser.uuid = null;
// delete authUser.uuid;


//프로퍼티 제거
function removeProperty(obj, key){
  if(isObject(obj)){ //근데 배열이랑 null도 object 라... 안전하지는 않다.
    obj[key] = null;  // . 은 키값을 변화할 수 없기 때문에 대괄호로
  }
}

function isObject(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'
}
      // 데이터 타입을 체크하는 방법은 typeof => 허술함
      // 정교하게 타입을 체크하는 방법 Object.prototype.toString.call 
      // toString은 오브젝트만 쓸 수 있음 // 배열이 가지고 있는 것이랑 다름

      //Object.prototype.toString.call('sdkf') // [object String]
      //Object.prototype.toString.call(134) // [object Number]

      //Object.prototype.toString.call('sdkf').slice(8, -1) // String
      //Object.prototype.toString.call('sdkf').slice(8, -1).toLowerCase() // string

      //object 말고 다른 타입도 검사하는 함수도 필요하다면
      //isObject(), isNumber() 이렇게 여러개를 만드는게 낫다!

// getter function return;
// setter function return x < 상황따라 다름!

removeProperty(authUser, 'uuid'); // authUser.uuid = null; 




//프로퍼티 삭제 
function deleteProperty(obj,key){
  if(!isObject(obj)) return false;
  
  delete obj[key];
  return true;
}



/* --------------------------------- 단축 프로퍼티 -------------------------------- */
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

//short hand property
const student = {
  name,
  email,
  authorization,
  isLogin,
}



/* ------------------------------- 프로퍼티 이름 제한 ------------------------------- */
// 예약어: class, if, switch, for, while, ...


 /*객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성 ----------- */
function isEmptyObject() {
  return null;
}









/* ----------------------------- ************** ----------------------------- */
/* ----------------------------- ************** ----------------------------- */
/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
/* ----------------------------- ************** ----------------------------- */
/* ----------------------------- ************** ----------------------------- */
// 순서는 바꿀 수 없음. 변수 이름은 바꿀 수 있다.


const arr = [10, 100, 1000, 10000]
      // const는 내부 수정 안되는데
      // let 는 내부 수정 가능

  // const a1 = arr[0];
  // const a2 = arr[1]; 
  // const a3 = arr[2];  // 다 분해시키기 어렵다

const [a1, a2, a3, a4] = [10, 100, 1000, 10000]
console.log(a1); //10

//rest parameter 
// 배열 내의 값을 알 수 없을 때
const [b1, ...rest] = [10, 100, 1000, 10000]
console.log(rest); // [100, 1000, 10000]

const [c1,,...rest2] = [10, 100, 1000, 10000]
console.log(rest2); // [1000, 10000]



for(let [key,value] of Object.entries(authUser)){
  console.log(key,value);
}



const first = document.querySelector('.first');
const second = document.querySelector('.second');

const [firstElem,secondElem] = document.querySelectorAll('span');




/* ----------------------------- ************** ----------------------------- */
/* ----------------------------- ************** ----------------------------- */
/* ----------------------------- ************** ----------------------------- */
/* ----------------------------- ************** ----------------------------- */
/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
/* ----------------------------- ************** ----------------------------- */
/* ----------------------------- ************** ----------------------------- */
/* ----------------------------- ************** ----------------------------- */
/* ----------------------------- ************** ----------------------------- */

// 순서 상관 x 변수 이름을 바꿀 수 있습니다
// 기본값을 지정할 수 있습니다. 

const salaries = {
  박지성 : 800,
  김보미 : 150, 
  이경민 : 250,
  전희선 : 50,
}

const {김보미:김, 전희선, 박지성:박, 이경민, 도가현 = 200} = salaries;

console.log(전희선); // 50
console.log(박); // 800
console.log(도가현); // 200




      // 1. 함수의 인수가(arguments) 엄청 많아질 경우 객체를 받아 처리할 수 있다.
      // e.g) createUserList('seonbeom',30,'서울시 중랑구','010-2222-222')
console.log(createUserList(
  {
    name:'tiger',
    age:35,
    address:'서울시 중랑구 면목동',
    phone:'010-2222-2222'
  }
));

const defaultOptions = {
  name:'',
  age: 0,
  address:'',
  phone:''
}


function createUserList(options){

  // mixin 
  // const mix = {...defaultOptions,...options};

  // 2. 함수 안에서 객체를 구조 분해할 수 있다.     // default parameter
  const {name:n,age,address,phone,nickName = 'tiger'} = options;

  // 3. 스코프 안에 동일한 변수가 사용될 경우 alias를 지정할 수 있다.
  const name = '선범'

  // 4. shorthand property
  return {
    name:n,
    age,
    address,
    phone,
    nickName
  }
}


// 5. 어차피 들어오는게 객체라면 바로 구조 분해 할당 할 수 있지 않을까?
function createUserList2({name:n,age,address,phone,nickName = 'tiger'}){
  const name = '선범'

  return {
    name:n,
    age,
    address,
    phone,
    nickName
  }
}