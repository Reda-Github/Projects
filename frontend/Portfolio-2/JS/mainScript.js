let open = document.getElementById("open-links");
let close = document.getElementById("close-links");
let ul = document.getElementById("ul");

function openLinks() {
  open.style.display = "none";
  close.style.display = "block";
  ul.style.marginTop = "0px";
  ul.style.opacity = "1";
}
function closeLinks() {
  open.style.display = "block";
  close.style.display = "none";
  ul.style.marginTop = "-20px";
  ul.style.opacity = "0";
}