//DOM
//queryselector /queryselectorall
/*let link = document.querySelectorAll("a");
link.forEach(function(link){
    console.log(link);
});

let celdas = document.querySelectorAll("td");

    celdas.forEach(function(td){
    td.addEventListener("click", function(){
        console.log(this);
    })
});  */
let link=document.querySelectorAll(".close");
link.forEach(function(link){

link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");
    setTimeout(function() {   
        location.href="../index.html";         
    },601);
    return false;
    });
});