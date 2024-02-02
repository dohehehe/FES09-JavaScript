/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.
//일반 함수와 너무 비슷해보여서 ES6 부터 새로운 것을 도입

function Ani(name){
  this.name = name
}

const _a = new Ani()



/* ------------------------------------ - ----------------------------------- */

// constructor methods는 만듦과 동시에 최초 1회만 실행됨. (n회? x)

class Animal{
  constructor(name){
    this.name = name;
    this.stomach = [];
    this.legs = 4 ;
    this.tail = true ; 
  }

  getEat(){
    return this.stomach
  }

  setEat(food){
    this.prey = food;
    this.stomach.push(food);
  }
}

// const a = new Animal('호돌이')

class Tiger extends Animal{
  constructor(){
    super()
    this.pattern = '호랑이 무늬'
  }

  

  static bark(){ //하면 인스턴스에서 스테틱 메서드로 바껴서 Tiger.bark() // '어흥'이 된다. 
    return '어흥'
  }

  hunt(target){
    return `$[target]에게 조심히 접근한다.`
  }
}

const 한라산호랑이 = new Tiger('한돌이')