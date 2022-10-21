const dropdown = document.querySelectorAll(".dropdown");
const dropdownContent = document.querySelectorAll(".dropdown-content");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-menu");
const navbarSection = document.querySelector(".navbar-section-wraper");
const body = document.querySelector("body");
const arrowDown = document.querySelectorAll(".arrow-down");

menuBtn.onclick = () => {
  navbarSection.classList.add("show");
};

closeBtn.onclick = () => {
  navbarSection.classList.remove("show");
};

dropdown.forEach((el, index) => {
  el.onclick = () => {
    if (dropdownContent[index].classList.contains("show")) {
      dropdownContent[index].classList.remove("show");
      arrowDown[index].src = "./images/icon-arrow-down.svg";
    } else {
      dropdownContent[index].classList.add("show");
      arrowDown[index].src = "./images/icon-arrow-up.svg";
    }
  };
});
