/**
 * Created by M.Jin on 14-7-1.
 */
//dom操作中最常用的五个方法如下
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.getAttribute();
//document.setAttribute();

//实现自己的getElementsByClassName()

function getElementsByClassName(node ,classname){
    if(node.getElementsByClassName){
        //使用现有方法
        return node.getElementsByClassName(classname);
    }else{
        var results = new Array();
        var elems = node.getElementsByTagName("*");
        for(var i=0;i<elems.length;i++){
            if(elems[i].className.indexOf(classname) != -1){
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}

//获取属性
var paras = document.getElementsByTagName("p");
for(var i=0;i<paras.length;i++){
    alert(paras[i].getAttribute("title"));
}