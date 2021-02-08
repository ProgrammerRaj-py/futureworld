let toggleBtn = document.getElementById("toggleBtn");
let toggleMenu = document.getElementById("toggleMenu");
let qlink = document.getElementById("qlink");
let qlinkul = document.getElementById("qlinkul");
let subBtn = document.getElementById("subBtn");
let subForm = document.getElementById("subForm");

toggleBtn.addEventListener("click", ()=>{
    toggleMenu.classList.toggle("blockon");
})

qlink.addEventListener("click", ()=>{
    qlinkul.classList.toggle("blockon");
})

subBtn.addEventListener("click", ()=>{
    subForm.classList.toggle("blockon");
})