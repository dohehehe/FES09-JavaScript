import { getNode } from '../dom/getNode.js';




export const memo = (()=>{

  const cache = {
    // key : value
  };

  // closure
  return (key, callback) => {
    if(!callback) return cache[key]; 

    if(cache[key]){
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }
  
    cache[key] = callback();
  }
})()


// memo('cube',()=>getNode('#cube')); //setter

// memo('cube'); //div#cube getter