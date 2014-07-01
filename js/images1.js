/**
 * Created by M.Jin on 14-7-1.
 */
// 显示图片
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    if(document.getElementById("description")){
        var description = document.getElementById("description");
        var text = whichpic.getAttribute("title");
        description.firstChild.nodeValue = text;
    }
    return true;
}
//计算body子元素数量
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

//open 方法封装得方法
function popUp(winURL){
    window.open(winURL,"popup","width=320,height=480");
}

//点击元素弹出窗口，将事件移出行内
function prepareLinks(){
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        if(links[i].getAttribute("class") == 'popup'){
            links[i].onclick = function(){
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}

//初始检测
function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");

    for(i = 0;i<links.length;i++){
        links[i].onclick = function(){
            return !showPic(this);
        }
    }
}
//将函数添加到windowonload的方法
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

addLoadEvent(prepareGallery);

























