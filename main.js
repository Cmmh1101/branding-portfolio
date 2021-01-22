/*document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});*/

var menuBtn = document.getElementsByClassName('menu-btn')

var mobileMenu = document.getElementsByClassName('nav-menu')

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])