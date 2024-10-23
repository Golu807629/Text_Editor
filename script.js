function nxt(){
    var a=document.getElementById("field");
    a.style.display="none";
    var b=document.getElementById("field1");
    b.style.display="block";
    var c=document.getElementById("btn");
    c.style.display="none";
    var d=document.getElementById("btn1");
    d.style.display="block";
    var x=document.getElementById("text").value;
    var y=document.getElementById("result-box");
    y.innerHTML=x;
    
}
    var g=document.getElementById("btn1");
    g.onclick = function bck(){
    var a=document.getElementById("field");
    a.style.display="block";
    var b=document.getElementById("field1");
    b.style.display="none";
    var c=document.getElementById("btn");
    c.style.display="block";
    var d=document.getElementById("btn1");
    d.style.display="none";
}