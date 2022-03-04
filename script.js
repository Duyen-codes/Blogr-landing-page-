// Query Selectors
const navItems = [...document.querySelectorAll(".nav-item")];
const navLinks = document.querySelectorAll(".nav-link");
const arrowIcon = document.querySelector(".arrow-icon");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const navBar = document.querySelector(".navbar");
const header = document.querySelector("header");

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
// navItems.forEach((navItem) => {
//   navItem.addEventListener("click", (e) => {
//     navItems.forEach(navItem => {
//       navItem.classList.remove('active')
//       e.currentTarget.classList.add("active");
//     })
//   });
// });

navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    const clickedItem = e.target.closest("li");
    const itemDetail = clickedItem.querySelector(".dropdown-menu");
    const clickedItemActive = clickedItem.classList.contains("active");
    clickedItem.classList.toggle("active");
    if (clickedItemActive) {
      itemDetail.style.display = "none";
    } else {
      itemDetail.style.display = "flex";
    }
  });
});

header.addEventListener("click", (e) => {
  console.log("header clicked");
  if (!e.target.classList.contains("nav-link")) {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
  }
});
