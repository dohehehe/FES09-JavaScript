/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;
// innerWidth
// innerHeight

console.log(innerHeight);



/* Location 객체 --------------------------------------------------------- */
// http://localhost:8080/js/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}





/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;



// 시간이 오래 걸리는 가져오는 코드는 일반적인 javascript 처럼 가져올 수 없다
// 콜백이나 여러가지 방식을 사용해서 시간을 기다렸다가 새용해야함


// 실패 
// data 값을 받아오기도 전에 return 되버려서 값을 내주지 않음
      function getCoordsX(success){

        let data;

        navigator.geolocation.getCurrentPosition((data)=>{
          const { latitude:lat, longitude:long } = data.coords;
          data = {lat,long};
        })
        
        return data
      }

      

// 성공
// 따라서 데이터를 꺼내와야한다
function getCoords(success){

  navigator.geolocation.getCurrentPosition((data)=>{
    console.log(data.coords);
        // 객체 geoloacation 에서 현재 위치를 가져와서 그중 객체 coords 프로퍼티를 선택
        // 그 안에 현재 위치의 경도 위도 프로퍼티가 있다

    const { latitude:lat, longitude:long } = data.coords;
          //  객체 구조 분해 할당
          // 해당 객체 프로퍼티의 키 값을 success 함수의 인수로 전달된다

    success({lat,long});
          // success 함수가 실행된다

  })

}
      // navigator 가 data 값을 가져오는 중에 (비동기)
      // getoCords의 인수에 함수가 인자로 받아지며 success 함수를 정의한다

getCoords((data)=> console.log(data));
      // 콜백함수
      // let success = data => console.log(data);
      // fuction success (data) console.log(data); 와 같은 것으로 동작함




// promise
      function getCoordsPromise(){

        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition((data)=>{
            if(data){
              const { latitude:lat, longitude:long } = data.coords;
              resolve({lat,long})
            }else{
              reject({message:'error!'})
            }
          })
        })
        
      }




navigator.mediaDevices.getUserMedia({video:true}).then((stream)=>{
  console.log(stream);
  document.querySelector('#video').srcObject = stream;
})





/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;




/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;