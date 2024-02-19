
// localStorage.setItem('user', 'dohee');
// localStorage.setItem('user', {name: 'tiger', age: 15}); // object object 라고 뜲
// localStorage.setItem('user', JSON.stringify({name: 'tiger', age: 15}));

import { isObject, isString } from './typeOf.js';

// console.log(localStorage.getItem('user'));


const {localStorage:storage} = window;


export function setStroage(key, value){

  return new Promise((resolve,rejecct)=>{
    if(isString(key)){
    storage.setItem(key, JSON.stringify(value));
    resolve();
    } else{
      rejecct({message:'key는 문자 타입이어야 합니다.'});
    }
  })
}

export function getStorage(key){

  return new Promise((resolve,rejecct)=>{
    if(isString(key)){
      // result 값이 비어있게 된다. 따라서 resolve 에 넣어주기~
      resolve(JSON.parse(storage.getItem(key)));
    } else{
      rejecct({message:'key는 문자 타입이어야 합니다.'});
    }
  })
}


export function deleteStorage(key){
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  })
}

// setStroage('user',{name:'tiger'}).then(()=>{
//   storage.getItem('user').toUpperCase();
// })

console.log(await getStorage('user'));