let openMenu = document.getElementById("open-menu");
let tabs = document.querySelectorAll(".tab-heder span");

openMenu.addEventListener("click", ()=>{
    openMenu.classList.toggle("bi-x")
});

tabs.forEach((tab,index )=>{
    tab.addEventListener("click",()=>{
        tabs.forEach((tab) => tab.classList.remove("active"))
        tab.classList.add("active")
    })
})