const END_POINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export const tiger = async (options)=>{

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url,restOptions); // Promise<Response>

  // ok : status 200 ~ 399 
  if(response.ok){ // 통신 성공
    response.data = await response.json();
  }

  return response
}


// const result = await tiger({
//   url:END_POINT
// });



tiger.get = (url,options)=>{
  return tiger({
    url,
    ...options
  })
}



tiger.post = (url,body,options)=>{
  return tiger({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}


tiger.put = (url,body,options)=>{
  return tiger({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}


tiger.delete = (url,options)=>{
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}






// const data = await tiger.get(END_POINT);
// const data = await tiger.post(END_POINT,{name:'tiger'});


// tiger.post()
// tiger.put()
// tiger.delete()



// fetch는 기본적으로 map 통신을 한다
// 독특한 것은 url를 따로 뽑아서 객체를 만들어줌
// 그래서 복사할때 url 를 따로 분리
// response에는 데이터 보다는 어떤식으로 응답을 줬는지에 대한 상태가 나온다
// response.dat는 데이터니 데이터 키 값을 다시 설정해서 원하는 데이터 설정
// 원하는 데이터 확인 방법은 response.json 을 호출하면 진짜 데이터를 호출 그러나 프라미스 객체를 반환함
// 이걸 다시 response.data로 지정. 