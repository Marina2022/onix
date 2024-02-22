const mobileBtn = document.querySelector('.mobileBtn')
const mobileMenu = document.querySelector('.mobileMenu')
const closeBtn = document.querySelector('.header__close')

mobileBtn.addEventListener('click', ()=>{
    mobileMenu.classList.remove('hidden')
})
closeBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('hidden')
})