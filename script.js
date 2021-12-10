const burgerIcon = document.querySelector('.burger-icon')

const closeIcon = document.querySelector('.close-icon')

const navBar = document.querySelector('.navbar')

burgerIcon.addEventListener('click', () => {
    console.log('clicked')
    burgerIcon.classList.toggle('open');
    closeIcon.classList.toggle('open');
    navBar.classList.toggle('open');
})

closeIcon.addEventListener('click', () => {
    console.log('closed')
})

// Arrow icon rotates on navlink click 

const navItem = document.querySelector('.nav-item')
const arrowIcon = document.querySelector('.arrow-icon')
navItem.addEventListener('click', () => {

    navItem.classList.toggle('active');
    console.log('rotate');
})