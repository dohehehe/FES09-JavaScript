/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Array.isArray(data); 

  console.log(isArray([])); // true
  console.log(isArray({})); // false



const people = [
  {
    id: 0, 
    name: '박가희',
    age: 25,
    job: '명탐정코난 범인',
    imageSrc: 'sadlkfsld'
  },
  {
    id: 1,
    name: '김보미',
    age: 64,
    job: '짜요짜요 마케터',
    imageSrc: 'Gakz34'
  },
  {
    id: 2,
    name: '한태희',
    age: 13, 
    job: '삐돌이',
    imageSrc: 'ksdifi'
  },
  {
    id: 3,
    name: '이원명',
    age: 81,
    job: '이도령',
    imageSrc: 'oiwioei'
  }
]



/* ---------------------------------- 요소 순환 --------------------------------- */
// forEach
// * 배열에 써야한다
// * .forEach('여기에 함수. 콜백함수이다. 보통 화살표 함수')
//   이 콜백함수는 매개변수가 정해져 있다.


let nameArray = [];
      // * for Each 자체는 값을 반환 x 
      //   그렇기 때문에 결과값을 반환하기 위한 변수를 설정


people.forEach((item, index, array)=>{
  console.log(item.name); // 박가희 김보미 한태희 이원명
  nameArray.push(item.name);
})

console.log(nameArray); // ['박가희', '김보미', '한태희', '이원명']




// 이벤트가 많을때 이런 방식을 쓰면 되나요? x 
// 부하가 많이 걸림
// 이벤트 위임 (event delegation)

const list = document.querySelectorAll('span');
    // console.log(list); // NodeList [span.first, span.second]

// list[0].addEventListener('click',()=>{
//   console.log('first!');
// })

// list[1].addEventListener('click',()=>{
//   console.log('second');
// })

list.forEach((item)=>{
  item.addEventListener('click',()=>{
    console.log('click');
  })
})












/* ---------------------------------- 원형 파괴 --------------------------------- */

const arr = [10, 100, 1000, 10_000];

// push
// pop
// unshift
// shift
/* reverse -------------------------------- */
      // const reverse = arr.reverse();
            // console.log(reverse); // [10000, 1000, 100, 10]
            // console.log(arr); // [10000, 1000, 100, 10]
            //                   // 원형이 파괴됨 
      
// 원형 유지하면서 reverse 
const reverse2 = [...arr].reverse();
      console.log(reverse2); 
      console.log(arr);
      


/* splice --------------------------------- */
// slice의 상위 버전
const splice = arr.splice(1,2,'javascript', 'css')
      console.log(splice); // [100, 1000]
      console.log(arr);    // [10, 'javascript', 'css', 10000]



/* sort ---------------------------------- */
arr.sort((a,b)=>{
  return a - b
})






/* -------------------------------- 새로운 배열 반환 ------------------------------- */
// 새로운 배열을 만들어서 작동
// 원형을 훼손하지 않는다

// concat
// slice
// toSorted
// toReversed
// toSpliced


/* map ---------------------------------- */
// * 값을 반환할 수 있다. 이것이 forEach 와 다른점
//   forEach는 빈 배열을 만들어서 push를 해야함. return을 넣어도 undefined
//   하지만 map 은 알아서 배열로 만들어서 내보낸다.


const job = people.map((item,index)=>{
  console.log(item); // 배열이 나열됨
  return item.job 
})
      console.log(job); 
      // ['명탐정코난 범인', '짜요짜요 마케터', '삐돌이', '이도령']




// html에 배열 출력하기
const card = people.map((item,index)=>{
  return /*html*/ `
    <div class="userCard card-${index+1}">
      <span> 이름 : ${item.name} </span>
      <span> 나이 : ${item.age} </span>
      <span> 직업 : ${item.job} </span>
    </div>
    `
})

card.forEach((item)=>document.body.insertAdjacentHTML('beforeend',item))




// 배열 요소에 변화주기
const newAge = people.map(item => item.age +1 );
      console.log(newAge); // [26, 65, 14, 82]






/* filter --------------------------------- */

const a = people.filter((item)=> item.age < 30)
      console.log(a);











/* ------------------------------- 요소 포함 여부 확인 ------------------------------ */

// indexOf
// lastIndexOf
// includes




/* ----------------------------- filter vs find ----------------------------- */

// filter은 필터에 걸린 모든 요소를 '배열' 그대로 반환한다
// find은 찾은 맨 처음 요소만을 '객체'로 반환한다

/* find 요소 찾기 ------------------------------ */
//  .find는 찾은 것을 반환해줌
//  .findIndex 는 index를 반환해줌 

const find = people.find((item)=> {
  return item.job === '삐돌이'
})
      console.log(find);
        // {id: 2, name: '한태희', age: 13, job: '삐돌이', imageSrc: 'ksdifi'}



/* filter 요소 걸러내기 --------------------------- */

// filter






/* --------------------------- 요소별 리듀서(reducer) 실행 -------------------------- */
// reduce
// reduceRight

// 전체 나이의 합 구하기
const totalAge = people.reduce((acc,cur)=> acc + cur.age, 0);
      console.log(totalAge); // 183



const tem = people.reduce((htmlCode,cur)=>{
  return htmlCode + `<div>${cur.name} : ${cur.age}</div>`
},'')

document.body.insertAdjacentHTML('beforeend',tem)






/* --------------------------- string ←→ array 변환 --------------------------- */

/*  split : 문자 -> 배열 ---------------------------- */

const str = '원명 가희 소정 설아 경민 진욱';
const stringToArray = str.split(' ');
  console.log(stringToArray); //['원명', '가희', '소정', '설아', '경민', '진욱']



/* join : 배열 -> 문자 ---------------------------- */
const arrayToString = stringToArray.join('-');
  console.log(arrayToString); //원명-가희-소정-설아-경민-진욱