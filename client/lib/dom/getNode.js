      // querySelector 를 편하기 하기 위핸 utill 함수
function getNode(node, context = document){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.')
  }
      //DOCUMENT_NODE = 9 
  if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
  }
  return context.querySelector(node);
}

      // 모두를 가져오는 것
function getNodes(node, context = document){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이어야 합니다.')
  }
      //DOCUMENT_NODE = 9 
  if(context.nodeType !== document.DOCUMENT_NODE){
    context = document.querySelector(context);
  }
  return context.querySelectorAll(node);
}

