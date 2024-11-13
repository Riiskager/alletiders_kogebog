window.addEventListener("resize", setHeaderImage);
window.addEventListener("load", setHeaderImage);

function setHeaderImage() {
  const headerImage = document.querySelector(".header_img img");
  
  if (window.innerWidth >= 1024) {
    headerImage.src = "img/header_computer.png"; // Desktop image
  } else if (window.innerWidth >= 768) {
    headerImage.src = "img/header_tablet.png"; // Tablet image
  } else {
    headerImage.src = "img/header-mobile.png"; // Mobile image
  }
}