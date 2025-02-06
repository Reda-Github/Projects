// let mainUL = document.getElementById("main-ul");
// let silder = document.getElementById("slider");

// let x = 0;

// mainUL.style.transitionDuration = "1s";

// function mybar() {
//   if (x == 0) {
//     mainUL.style.display = "block";
//     mainUL.style.transition = "all 1s";
//     mainUL.style.bottom = "-220px";
//     mainUL.style.zIndex = "1";
//     silder.style.marginTop = "220px";
    
//     x = 1;
//   }
//   else if (x == 1) {
//     mainUL.style.display = "none";
//     silder.style.marginTop = "";
//     x = 0;
//   }
  
// }

let parent = document.getElementById("main-ul");
let child = document.getElementById("mybar");
let slider = document.getElementById("slider");

child.addEventListener('mouseenter', function () {
  parent.style.backgroundColor = 'white'; 
  parent.style.zIndex = "-1";
  parent.style.bottom = "-222px";
  parent.style.transition = ".3s";
  slider.style.marginTop = "222px";
  
   let x = 10;
  
});

child.addEventListener('mouseleave', function() {
  parent.style.backgroundColor = 'white'; 
  parent.style.zIndex = "-1";
  parent.style.bottom = "0px"
  slider.style.marginTop = "0px";
})