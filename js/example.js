/**
 * Created by M.Jin on 14-7-1.
 */
window.onload = function(){
    var testdiv = document.getElementById("testdiv");
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is");
    var elph = document.createElement("em");
    var txt2 = document.createTextNode("my");
    var txt3 = document.createTextNode("content.");

    elph.appendChild(txt2);
    para.appendChild(txt1);
    para.appendChild(elph);
    para.appendChild(txt3);

    testdiv.appendChild(para);
}

//自定义 insertAfter() 函数
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}