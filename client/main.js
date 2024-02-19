import { clearContents, deleteStorage, getNode, getStorage, setStroage } from './lib/index.js';



// 1. textField

const textField = getNode('#textField');
const clear = getNode('[data-name="clear"]');


const handleTextField = async (e) => {
  const value = e.currentTarget.value;
  setStroage('text', value);
}

const handleClear = () => {
  deleteStorage('text').then(()=>{
    clearContents(textField);
  })
}


textField.addEventListener('input', handleTextField);
clear.addEventListener('click', handleClear);




// 바로 실행시키기. 성능이 안좋으면 안될수도. 
// 안 될 수도 있다
// function init (){
//   console.log('init');
// }

// window.addEventListener('DOMContentLoaded', init);




// 함수를 만드는 동시에 실행시켜라
// (()=>{

//   getStorage('text').then((res)=>{
//     textField.value = res;
//   })
// })()


(async()=>{

  const data = await getStorage('text');
  textField.value = data;

})()