/* -------------------------------------------------------------------------- */
/*                                    ----                                    */
/* -------------------------------------------------------------------------- */


// 어디에 쓰이는가? 

const first = document.querySelector('.first');




function handleClick(){

  let isClicked = false; //한번 실행하고 끝이니까
                          //또 생성하고 실행하느라 계속 false 다

  return () => {

    console.log('clicked'); 

    if(!isClicked){
      document.body.style.background = 'orange' //setter
    } else{
      document.body.style.background = 'white'
    }

    isClicked = !isClicked;
  }
}

first.addEventListener('click',handleClick())


// 즉시실행되도록 해줘야함
// EPIP
// const handleClick = (()=>{

//   let isClicked = false;

//   return function(){

//     if(!isClicked){
//       document.body.style.background = 'orange'
//     }else{
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked; 

//   }
// })()




// first.addEventListener('click',handleClick)




function state(initValue){
  let value = initValue;

  function read(){
    return value;
  }

  function write(newValue){
    value = newValue;
  }

  // read() // 111
  // write(222)
  // read() // 222

  return [read, write];
}

const read = state(111)[0];



state(111);