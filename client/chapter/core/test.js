let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster , // 프로토타입을 복제
  stomach: [] // 독립적인 stomach 배열
};

let lazy = {
  __proto__: hamster , // 프로토타입을 복제
  stomach: [] // 독립적인 stomach 배열
};

speedy.eat("Apple");
speedy.eat("Banana");

lazy.eat("Carrot");

console.log(speedy.stomach); // 결과: ["Apple", "Banana"]
console.log(lazy.stomach);   // 결과: ["Carrot"]
console.log(hamster.stomach); // 결과: []