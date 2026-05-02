// 对外提供统一的事件绑定接口，屏蔽浏览器差异
function addEvent(element, event, handler) {
  if (element.addEventListener) {
    element.addEventListener(event, handler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + event, handler);
  } else {
    element["on" + event] = handler;
  }
}

function removeEvent(element, event, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(event, handler, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + event, handler);
  } else {
    element["on" + event] = null;
  }
}
