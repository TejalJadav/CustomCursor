let main = document.querySelector(".main");
let ptr = document.querySelector(".pointer");

main.addEventListener("mousemove",function(dets){
    ptr.style.left = dets.x + "px";
    ptr.style.top = dets.y + "px";
})