const burgerIcon = document.querySelector('.burger-icon')

const closeIcon = document.querySelector('.close-icon')

const navBar = document.querySelector('.navbar')

burgerIcon.addEventListener('click', () => {
    console.log('clicked')
    burgerIcon.classList.add('open');
    closeIcon.classList.add('open');
    navBar.classList.add('open');
})

closeIcon.addEventListener('click', () => {
    console.log('closed')
    burgerIcon.classList.remove('open');
    closeIcon.classList.remove('open');
    navBar.classList.remove('open');

})

// Arrow icon rotates on navlink click 

const navItem = document.querySelector('.nav-item')
const arrowIcon = document.querySelector('.arrow-icon')
navItem.addEventListener('click', () => {

    navItem.classList.toggle('active');
    console.log('rotate');
})
