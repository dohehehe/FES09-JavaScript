import {getNode} from "./getNode.js"

function clearContents(node){
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'){
    node.value = ''
    return;
  }

  node.textContent = ''
}

export default clearContents; 
// 기본 내보내기 방식