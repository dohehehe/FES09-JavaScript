/* ---------------- */
/* For In Loop      */
/* ---------------- */



const js = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty(){
    return '내가 누굴까~~?'
  }
};

Object.prototype.nickName = 'tiger';


/* ---------------------- 객체의 속성(property) 포함 여부 확인 방법 ---------------------- */

const key = 'creator';
console.log(key in js);  //true
      //이 객체안에는 craator 라는 속성이 있기때문에 

const key2 = 'valueOf';
const key3 = 'nickName';
console.log(js);
console.log(key2 in js); //true
console.log(key3 in js); //true
      //valueOf, toString 와 같은 매서드를 key 에 할당해도 있다고 나옴
      //객체 'js' 안에 해당 key가 있나 물어본 것인데
      //객체의 조상인 진짜 객체 object에 해당 속성들이 있기때문에 true로 반환한다. 





/* ----------------- 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는? ----------------- */

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has) 있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(js.hasOwnProperty(key)); // '내가 누굴까~?'

      // .hasOwnProperty() 는 본래 객체의 내장 매서드이다.
      // 객체 안에 hasOwnProperty를 이름으로 하는 속성을 넣었을때 안의 value(여기서는 함수 동작)를 출력해버림

      //javascript는 hasOwnProperty를 보호해주지 않는다. 

      //생성된 객체의 method는 불안함, => 진짜 객체(object)의 능력을 빌려씀
      
      //매서드 빌려쓰기(call)
      //다른 데이터의 매서드를 빌려쓸 수 있다


console.log( Object.prototype.hasOwnProperty.call(js,key) ); //true
      //.hasOwnProperty.call(a, b)에서 a는 this 빌려쓰는 주체, b 는 arguments 인수 

console.log( ({}).hasOwnProperty.call(js,key) ); //true
      //  ({})는 새로운 객체를 만든것이라 좋음 ! 그 누구도 훼손하지 않음. 


// .hasOwnProperty() 는 객체가 특정 속성을 직접 소유하고 있는지 여부를 확인
// for ...in 문은 객체의 모든 열거 가능한 속성을 반복하며 각 속성의 이름을 가져옵니다



/* ------------------------------- for ~ in 문 ------------------------------- */
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?


for ( let apple in js ){

  console.log(apple); // 객체 'js' 내의 속성 값만이 아니라 nickName도 출력된다

  if(Object.prototype.hasOwnProperty.call(js,apple)){
    console.log(apple);
  }
      //1. key = 'creator' console.log(key);
      //2. key = 'creatAt' console.log(key);
      //3. key = 'createAt'  console.log(key);
      //... 반복적으로 실행되며 객체 'js' 의 key 값을 순환한다
}

      //여기서의 key 는 위에 선언한 key와 다르다 (apple 로 대체)
      //for문 안에서만 유효함 
      //어떤 변수를 써도 상관없음




/* ------------------------- 배열도 for ..in을 쓸 수 있을까? ------------------------- */

const tens = [10, 100, 1000, 10000];

for (let key in tens){
  console.log(key); // 0, 1, 2, 3, nickName
  console.log(tens[key]); //10, 100,1000, 10000, tiger
}
      // 배열은 순서가 중요한대 for ... in 은 데이터 양이 방대하지면 위험할 수 있다. 
      // 배열은 순서 보장이 안됨. 
      // 성능 x => for..in은 객체에 양보하세요.. 