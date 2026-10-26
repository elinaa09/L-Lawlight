const facts = document.querySelectorAll(".fact");

facts.forEach(function (box) {
box.addEventListener("click",function(){ 
    box.classList.toggle("open");
});
});