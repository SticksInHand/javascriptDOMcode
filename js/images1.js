/**
 * Created by M.Jin on 14-7-1.
 */
// 显示图片
function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");
    var text = whichpic.getAttribute("title");

    placeholder.setAttribute("src",source);
    description.firstChild.nodeValue = text;

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

