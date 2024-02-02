/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */




/* ------------------- 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다. ------------------- */
const shopOrder = {
  date: '2023. 12. 06',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
  ],

  total: 0,
  totalPrice(){ // 내장함수로 넣는 것
                // 일반 함수에서의 this : 해당 함수를 호출한 대상
                // 여기서 this 는 shopOrder 이 된다
    this.total = this.menu.reduce((acc,cur)=> acc + (cur.price * cur.count),0)
    return this.total;
  }
};

shopOrder.totalPrice()
      // 총 결제 금액을 계산할때를 우선 풀어써보면 아래와 같다
      // console.log(shopOrder.menu[0].price * shopOrder.menu[0].count);





/* -------------------- forEach를 사용해서 모든 메뉴의 총 금액을 계산해주세요 ------------------- */
let total = 0;

shopOrder.menu.forEach((product)=>{
      // forEach 는 배열에서 사용 가능
      // console.log(product); // menu 배열의 세 개의 객체가 떨어짐
      // console.log(product.price); // 13000, 10000
      // console.log(product.price * product.count); // 26000, 10000
  total += product.price * product.count;
})

shopOrder.menu.forEach(p=> total += p.price * p.count);






/* --------------------------- reduce를 이용해 총 금액 계산 -------------------------- */
      // const result2 = shopOrder.menu.reduce((acc,cur)=>{
      //   console.log(acc); // 통 새우 돈까스가 든 객체만 출력됨 
      //                     // 초기값을 비워두면 첫번째 아이템이 acc으로 들어감

      //   console.log(cur); // 치즈 돈까스 든 객체만 출력됨
      //                     // acc에 첫번째 아이템이 들어가버려서 두번째만 출력됨
      // return acc + (cur.price * cur.count)
      // })

const result = shopOrder.menu.reduce((acc,cur)=>{
      console.log(acc); // 26000
      console.log(cur); // menu 배열의 세 개의 객체가 떨어짐
  return acc + (cur.price * cur.count)
},0)






/* -------------------------------- 메서드와 this ------------------------------- */
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만, 
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.


// 메서드 단축 구문

/* ------------------ 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this ------------------ */

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {  //getter
    return this.items[index]; // 여기서의 this navigationMenu
  },                          // 따라서 navigationMenu.items[index]가 된다
  addItem(newItem){ // setter
    this.items.push(newItem);
  },
};


// TypeScript

// navigationMenu.addItem({
//   name: 'link-l',
//   description: 'lycos',
//   website: 'https://lycos.co.kr'
// })