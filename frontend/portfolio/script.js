const bar = document.getElementById("sidebar");
const img = document.querySelector(".img");
const cvBtn = document.querySelector(".cv-btn");
const myData = document.querySelector(".my-data");
const links = document.querySelectorAll(".links div");
const icons = document.getElementById("icons");

// <i class="fa-solid fa-list"></i>
// <i class="fa-solid fa-circle-xmark"></i>

const close = document.getElementById("close-icon");
let x = 0;
close.onclick = function () {
  if (x === 0) {
    img.classList.add("img-hidden");
    cvBtn.classList.add("cv-btn-hidden");
    myData.classList.add("my-data-hidden");
    close.classList.add("fa-list");
    close.classList.remove("fa-circle-xmark");

    for (let i = 0; i < links.length; i++) links[i].classList.add("div-hidden");

    bar.style.width = "60px";
    bar.style.transition = "width 0.3s";
    icons.style.display = "flex";
    icons.style.flexDirection = "column";

    x = 1;
  } else {
    img.classList.remove("img-hidden");
    cvBtn.classList.remove("cv-btn-hidden");
    myData.classList.remove("my-data-hidden");
    close.classList.remove("fa-list");
    close.classList.add("fa-circle-xmark");

    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("div-hidden");
    }

    bar.style.width = "350px";
    bar.style.transition = "width 0.3s";
    icons.style.display = "block";

    x = 0;
  }
};

const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const contact = document.getElementById("contact");

const floatIcons = document.querySelectorAll(".link-float ul li");

const pages = document.querySelectorAll(".links ul li");

const contentPages = [home, about, services, contact];
contentPages.forEach((conPages) => conPages.classList.add("none-page"));
contentPages[0].classList.add("home-active");

pages.forEach((page) => {
  page.onclick = function () {
    contentPages.forEach((conPages) => conPages.classList.add("none-page"));

    contentPages[0].classList.remove("home-active");
    
    if (page.id === "i-home") home.classList.remove("none-page");
    if (page.id === "i-about") contentPages[1].classList.remove("none-page");
    if (page.id === "i-services") contentPages[2].classList.remove("none-page");
    if (page.id === "i-contact") contentPages[3].classList.remove("none-page");
  };
});
floatIcons.forEach((icon) => {
  icon.onclick = function () {
    contentPages[0].classList.remove("home-active");
    if (icon.id === "icon-home") home.classList.remove("none-page");
  };
});
