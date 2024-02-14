import {getNode, removeClass, addClass, isString} from '../index.js'


/**
 * 에러 메시지를 보여주는 함수
 * @param {HTMLElement | string} node 
 * @param {String} message 
 * @param {Number} timeout 
 * @return {void}
 */

export function showAlert(node, message = 'error', timeout = 1000){
  if(!isString(node)) node = getNode(node);

  const alertError = getNode(node);
  alertError.textContent = message;

  addClass(alertError, 'is-active');

  setTimeout(()=>{removeClass(alertError,'is-active')}, timeout);

}