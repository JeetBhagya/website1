var x=document.getElementById("menubtn");
var y=document.getElementById("navbar");
var p=document.getElementById("tb");
var q=document.getElementById("ad");
y.style.right="-250px";
q.style.display="none";

x.onclick=function(){
    if(y.style.right==="-250px"){
        y.style.right="0px";
    }
    else{
        y.style.right="-250px";
    }            
}
p.onclick=function(){
    if(q.style.display==="none")
    {
        q.style.display="block";
    }    
    else{
        q.style.display="none";
    }    
}

