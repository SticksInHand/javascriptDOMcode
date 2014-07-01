/**
 * Created by M.Jin on 14-7-1.
 */
// 显示图片
function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    placeholder.setAttribute("src",source);
}
//计算body子元素数量
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

window.onload = countBodyChildren;