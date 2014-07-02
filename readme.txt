这是一个编辑常用代码的项目，用来搞定最基础的代码.
其中包括如下函数的使用方法:

document.getElementById()
document.getElementsByTagName()
document.getElementByClassName()
object.getAttribute(attribute)
object.setAttribute(attribute,value)
document.createElement(nodeName)
document.createTextNode(text)
parent.appendChild(child)
parentElement.insertBefore(newElement,targetElement)
自定义insertAfter()
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}


window.open(url,name,features)
该方法中url为新创建浏览器窗口的url
name为新创建浏览器窗口的名字  用来与原窗口通讯
features可以传入一个字符串  包含各项参数

根据该方法可以封装一个用于弹出新窗口的简洁方法
function popUp(winURL){
    window.open(winURL,"popup","width=320,height=480");
}

封装加入加载清单的方法：
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

包含如下属性的使用方法：

element.childNodes
node.nodeType
node.nodeValue  #内容
node.firstChild
node.lastChild
node.childNodes
object.innerHTML
child.parentNode
node.nextSibling
node.previousSibing
element.style.property
element.className = value