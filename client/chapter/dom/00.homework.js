

/* ------------------------------ querySelector ----------------------------- */
// html DOM을 그대로 잡아서 javascript에 올려놓는다

const idField = document.querySelector('#idField');
const sumbit = document.querySelector('.btn');



/* ------------------------------ eventListener ----------------------------- */
function handleCheckId(){
  // console.log(this);
  //       // 이 함수를 호출한 대상
  //       // idField를 불러온다

  // console.log(this.value);
  //       // input에 입력된 값을 연속적으로 가져옴

  if(this.value === 'hello'){
    console.log('success');
    idField.classList.remove('is-active');
  } else{
    console.log('error!');
    idField.classList.add('is-active');
  }
}


function handleSubmit(e){
  e.preventDefault();
  console.log('제출!');
}


// 제출 누르면 새로고침됨
// type = "submit" ; 은 action
idField.addEventListener('input',handleCheckId);
      // 해당 input 에 값이 입력될때마다(타이핑될때마다) 지속적으로 해당 함수를 호출

sumbit.addEventListener('click',handleSubmit);