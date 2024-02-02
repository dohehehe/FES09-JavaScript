/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// 동물 -> 호랑이 -> 어떤 호랑이 

// getter setter


const animal = {
  legs: 4,
  tail: true, 
  stomach: [],
  get Eat(){ //getter
    return this.stomach
  },

  set Eat(food){ //setter
    this.prey = food;
    this.stomach.push(food)
  }
}


const tiger = {
  pattern: '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에 조용히 접근합니다.`
  },
  __proto__: animal
}

// tiger.__proto__ = animal;


const 백두산호랑이 = {
  color: 'white',
  name: '백랑이',
  __proto__: tiger
}

const 용마산호랑이 = {
  color: 'greenyellow',
  name: '선돌이',
  __proto__:tiger
}


// 변경한다면..? 
// 


//getter 와 setter 로 정의하면 함수 실행을 하지 않아도 가능함

//rabbit.__proto__ getter
//rabbit.__proto__ = { } setter

// animal.setEat('과일');



//생성자로 생성된 객체가 아니기 때문에 / 상속만 된거라서


// animal 이라는 큰 생성자를 만들어서 
// 이를 통해 생성된 객체 그리고 그를 통해 만든 생성자 그리고 또다른 객체 =






// 생성자 함수 

function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];

  this.getEat = function(){
    return this.stomach
  }

  this.setEat = function(food){
    this.prey = food;
    this.stomach.push(food)
  }
}

const a = new Animal();

//Tiger는 animal 은 전혀 상속받지 못하고 있다
function Tiger(name){
  // Animal.call (this) // 완전히 넘겨준다. 상속 x
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function(target){
    this.prey = target
    return `${target}에게 천천히 접근한다.`
  }
}

//이걸 하면 됨
// Tiger.prototype = a;
// Animal.call (this)

const 한라산호랑이 = new Tiger('한돌이');






// call, apply, bind 함수의 메서드 
// this를 전달해줄 수 있음.
//this를 강제로 바꾸어버리는 것

function sum(a,b){
  console.log(this);
  console.log(a+b);
}


//대신 실행함. 매개변수 어떻게 받음? 

//call, apply 는 바로 실행
sum.call('a', 10, 20); //30

sum.apply('a'); //Nan
sum.apply('a',[10,20]) //30


//bind 는 this를 sum에 묶고 새로운 함수로 반환
sum.bind('a') //아무런 일도 일어나지 않는다
//나중에 실행
const aa = sum.bind('a',10,30);


sum(1,2) //3 

sum.call(1,2) 
      //차이는 call은 this를 전달해줄 수 있음.

sum.call('안녕') //문자가 sum이라는 함수 안에 this가 된다 . 대신 호출해준다 빌려쓴다


