/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photos: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.photos.animate



// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName();
console.log(fullName);

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.



// web application programing interface

//web API
// sync(동기) & asunc(비동기)

// debounce throttle
// const timer = setTimeout(()=>{ //비동기작동
//   console.log('끝났습니다');
// }, 3000); //콜백함수 

// clearTimeout(timer);

// console.log(1);
// console.log(3);

setInterval(()=>{
  // console.log('안녕')
},1000);


//requestAnimationFrame()
//사용자 모니터 주사율에 따라서 횟수를 따른다

// canvas -> webGL -> p5.js, three.js

setTimeout(() => {
  
  const template = /* html */ `
    <button type="button" class="click">click</button>
  `

  document.body.insertAdjacentHTML('beforeend',template)


}, 3000);