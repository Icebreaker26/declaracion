let SI=document.getElementById("SI");
SI.addEventListener("click",function(e){
alert("Te amo, sabia que aceptarias <3   Manda wa");
 
});

let NO=document.getElementById("NO");
NO.addEventListener("mousemove",function(e){
let x = Math.round(Math.random() * 93);
let y = Math.round(Math.random() * 93);
  
 NO.style.left= x + "%";
 NO.style.top= y + "%"; 
  
 
});