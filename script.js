
// Arrow icon rotates on navlink click 

const navItems = document.querySelectorAll('.nav-item')
const navLinks = document.querySelectorAll('.nav-link')
const arrowIcon = document.querySelector('.arrow-icon')
const burgerIcon = document.querySelector('.burger-icon')
const closeIcon = document.querySelector('.close-icon')
const navBar = document.querySelector('.navbar')
const dropdowns = document.querySelectorAll('.dropdown-menu')

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.add('open');
    closeIcon.classList.add('open');
    navBar.classList.add('open');
})

closeIcon.addEventListener('click', () => {
    burgerIcon.classList.remove('open');
    closeIcon.classList.remove('open');
    navBar.classList.remove('open');
})

// Toggle between hiding and showing dropdown menu 
navItems.forEach(navItem => {
    navItem.addEventListener('click', (e) => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active')
        })

        navItem.classList.toggle('active')
    });

})


