/** @format */

let BtnMenu = document.querySelector(".BtnMenu");
let BntClose = document.querySelector(".BntClose");
let mobileNav = document.querySelector(".mobileNav");
let linkMobile = document.querySelectorAll(".linkMobile");

BtnMenu.addEventListener("click", () => {
  mobileNav.classList.add("mobileNavNewClasse");
});

BntClose.addEventListener("click", () => {
  mobileNav.classList.remove("mobileNavNewClasse");
});

for (let i = 0; i < linkMobile.length; i++) {
  linkMobile[i].addEventListener("click",()=>{
    mobileNav.classList.remove("mobileNavNewClasse");
  })
}
