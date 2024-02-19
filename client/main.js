
/* global gsap */

import {insertLast, tiger, xhr, renderUserCard, getNode as $, changeColor, renderSpinner, delayP, renderEmptyCard, clearContents} from './lib/index.js';


const END_POINT = 'http://localhost:3000/users';

const userCardInner = $('.user-card-inner');

// [phase - 1]
// 1. user 데이터를 tiger 함수를 사용해 fetch 해주세요.
//    - tiger.get()

// 2. 함수 안에 넣기 (renderUserList)
// 3. html, css 붙여넣기
// 4. 유저 데이터를 화면에 렌더링
//    - 유저 데이터(array) 순환하여 몸든 아이템 뽑아내기 (forEach)
//    - 템플릿 변수 만들기 (article)
//    - templat literal을 사용하여 데이터 집어넣기(보간 : interpolation)
//    - inserLast함수를 사용하여 화면에 렌더링하기


async function renderUserList(){

  renderSpinner(userCardInner);

  // async 와 await 를 썼으면 catch 로 에러를 잡아야한다
  try {

    await delayP();

    gsap.to('.loadingSpinner', {
      opacity:0,
      onComplete(){
        $('.loadingSpinner').remove();
      }
    })

    const response = await tiger.get(END_POINT);

    const userData = response.data;

    userData.forEach((user)=>{
      renderUserCard(userCardInner, user)
    })

    changeColor('.user-card');

    gsap.from('.user-card',{
      x: 100,
      opacity: 0,
      stagger: {
        from: 'edge',
        amount: 1,
      },
    })  
  }
  catch {

    renderEmptyCard(userCardInner);
  }
  
}


renderUserList();

function handleDelete(e){
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if(!button) return;

  const id = article.dataset.index.slice(5);

  // 제대로 지워지지 않음
  // tiger.delete(id);

  tiger.delete(`${END_POINT}/${id}`)
  .then(()=>{
      //delete 통신 이후 
      // 기존 유저의 목록 제거
      //유저 목록 fetch 이후 다시 렌더링

    clearContents(userCardInner);
    renderUserList();

  })



  
}

userCardInner.addEventListener('click', handleDelete);


const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

const handleCreate = () => {
  gsap.to('.pop',{autoAlpha:1});
}

const handleCancel = (e) => {
  e.stopPropagation();
  gsap.to('.pop',{autoAlpha:0});
}


const handleDone = (e) => {
  e.preventDefault();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  // post 통신
  // - name, email, website 담고 있는 새로운 객체를 생성
  // - post 통신의 body에 객체 전달 
  // - 유저 목록 지우기 (clearContents)
  // - 유저 목록 렌더링 하기 (renderUserList)

  const obj = {name,email, website};

  tiger.post(END_POINT, obj).then(()=>{
    clearContents(userCardInner);
    renderUserList();
  })
  
  gsap.to('.pop', {autoAlpha:0});
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);