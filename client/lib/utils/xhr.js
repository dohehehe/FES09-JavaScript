
/* -------------------------------------------------------------------------- */
/*                                xhr callback                                */
/* -------------------------------------------------------------------------- */


const END_POINT = 'https://jsonplaceholder.typicode.com/users';

export function xhr({ 
  // 매개변수로 바로 구조분해할당 + short hand property
  method = 'GET',
  url = '', 
  onSuccess = null, 
  onFail = null, 
  body = null,
  headers = {
    // 그냥 객체를 전달하면 서버에서 받는 것은 text/plain 이다
    // 사용설명서가 없으면 그냥 문자에 불과하다 -> 생성 시에 서버가 아는 id 값만 생성한다. 
    // 그렇다면 서버에게 이것이 json 파일의 형태 인 것을 알리는 것이 이것!
    // 네트워크 요청의 fetch를 보면 이제 Content-Type이 application/json 으로 변경되어 있다. 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  }
  // 
}){

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value])=> { // headers에 객체들에게 반복문을 돌려 모두 적용
    xhr.setRequestHeader(key,value);
  })

  xhr.addEventListener('readystatechange', ()=>{
        /* 'readystatechange' 이벤트
          웹 페이지에서 데이터를 로드할 때 발생하는 이벤트
				  이 이벤트는 데이터 로드 과정의 상태가 변경될 때마다 호출
            [readyState]
            0: uninitialized
            1: loading
            2: loaded
            3: interactive
            4: complete
        */
    
    const {readyState, status, response} = xhr;

    if(readyState === 4){

      if(status >= 200 && status <400){ 
        onSuccess(JSON.parse(response)) // 콜백함수
                  /* JSON.parse()
                    JSON 형식의 문자열을 JavaScript 객체로 변환하는 역할
                    JSON 이 받는 모든 데이터는 모두 단순 문자열이기 때문
                  */

      } else {
        onFail({message: '에러가 발생했습니다!'})
      }
    }
  })

  xhr.send(JSON.stringify(body));
          /* JSON.stringify()
            JavaScript 객체나 값을 JSON 문자열로 변환하는 메서드
          */
  // post나 put 매서드가 들어왔을때 javascript의 객체를 
  // 다시 JSON 문자열로 변환해서 xhr의 url 에 보낸다
}


// method를 매번 쓰지 않고 간단하게 만들기 위해 작성
// 매개변수로 받은 것을 다시 xhr함수의 인수로 전달
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  })
}

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  })
}

xhr.put= (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  })
}

xhr.delte= (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  })
}







/* -------------------------------------------------------------------------- */
/*                                 xhr Promise                                */
/* -------------------------------------------------------------------------- */


const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*',
  }
}


export function xhrPromise(options){

  // 객체를 전개해서 다시 객체로 넣는 얕은 복사 {...object}
  // 중복되는 프로퍼티가 있다면 뒤에 오는 객체가 덮어씌운다
  // 여기서는 defaultOptions가 먼저 전개된 뒤에 options에서 있는 프로퍼티만이 수정됨
  const {method, url, body, headers} = {
    ...defaultOptions,
    ... options,
    headers: {...defaultOptions.headers, ... options.headers}
  }; // 그런데, 얕은 복사이기에 heards 객체 내의 프로퍼티는 참조 복사가 됨
     // 따라서 headers 객체도 전개해서 복사해준다

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject)=>{
    xhr.addEventListener('readystatechange', ()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          resolve(JSON.parse(xhr.response))
        } else{
          // error
        }
      }
    })
  })

}


// 프로미스가 반환하는 건 비어있는 프로미스 이기에 
xhrPromise.get = (url) => {
  return xhrPromise({url})
}

xhrPromise.post = (url, body) => {
  return xhrPromise({
    mehtod: 'POST',
    url, 
    body
  })
}

xhrPromise.put = (url, body) => {
  return xhrPromise({
    mehtod: 'PUT',
    url, 
    body
  })
}


xhrPromise.delete = (url) =>{
  return xhrPromise({
    method:'DELETE',
    url,
  })
}