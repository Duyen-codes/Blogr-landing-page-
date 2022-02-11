// Arrow icon rotates on navlink click

const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
const arrowIcon = document.querySelector(".arrow-icon");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const navBar = document.querySelector(".navbar");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.add("open");
  closeIcon.classList.add("open");
  navBar.classList.add("open");
});

closeIcon.addEventListener("click", () => {
  burgerIcon.classList.remove("open");
  closeIcon.classList.remove("open");
  navBar.classList.remove("open");
});

// Toggle between hiding and showing dropdown menu
navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    navItems.forEach(navItem => {
      navItem.classList.remove('active')
      e.currentTarget.classList.add("active");
    })
  });

});

//Close the dropdown if the user clicks outside of it
let dropDowns = document.querySelectorAll(".dropdown-menu");
window.onclick = function (e) {
  if (window.innerWidth >= 1200 && !dropDowns.contains(e.target) && !navItems.contains(e.target)) {
    [dropDowns, navItems].forEach(each => each.classList.remove('active'))
  }
};
