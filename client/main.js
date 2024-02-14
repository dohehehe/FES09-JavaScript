// 모듈 프로그래밍 사용해서
import {addClass, clearContents, getNode, getRandom, insertLast, isNumericString, removeClass, showAlert, shake} from './lib/index.js';
import jujeobData from './data/data.js';


/// [phase-1]
/// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
/// 2. input 값을 (콘솔에) 가져와 주세요. 
/// 3. jujeobData 가져오기 

/// 4. jujeobData 함수에 input.value를 넣어주세요
/// 5. 랜덤한 주접 한개를 pick
///     - jujeobData => return 
///     - array => array[ ] + getRandom( n ) 

/// 6. pick을 result에 뿌려주세요.
///    - result 내용 비우기 (clearContents, node.textContent = '')
///    - pick text => insertAdjacentHTML('beforeend', text), insertLast()




// [phase -2]
// 1. 아무 값도 입력 받지 못했을 때 예외 처리 (alert)
// 2. 공백 문자를 받았을 때 에외처리 (alert)
//
// 3. 숫자형 문자를 받았을 때 예외처리 (alert)




const submit = getNode('#submit');
const nameField = getNode('#nameField');

const result = getNode('.result');



submit.addEventListener('click',handleJujeob);


function handleJujeob(e){
  e.preventDefault();

  const name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length -1 )];



  if(!name || name.replace(/\s*/g,'') === '') {

    // addClass(nameField,'shake');
    showAlert('.alert-error', '이름을 입력해주세요');
    shake.restart();

    return ;
  }



  if(!isNumericString(name)){
    showAlert('.alert-error', '제대로된 이름을 입력해주세요');
    return;
  }



  clearContents(result);
  insertLast(result, pick);

}


function handleCopy(){
  const text = this.textContent;

  // 보다 안전한 코드 / 의존하는 코드 / 비동기 통신에서 중요(서버랑)
  navigator.clipboard.writeText(text).then(()=>{
    showAlert('.alert-success','클립보드 복사 완료!');
  })

}

result.addEventListener('click', handleCopy);











