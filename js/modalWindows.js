const backgroundModalWindow = document.querySelector(".background_modal-window");

backgroundModalWindow.addEventListener('click', () => {
  closeModalReg()
  closeModalLog()
  closeBurger()
})

// modal register ==================================================//

const buttonRegister = document.querySelector(".header_nav-links_button");
const buttonCloseModalWindowRegister = document.querySelector(".cross-close");
const body = document.querySelector('body');
const alreadyReg = document.querySelector('.have-acc')

function openModalReg() {
  const modalWindowRegister = document.querySelector(".modal-window_registration");
  modalWindowRegister.classList.remove('hidden')
  backgroundModalWindow.classList.remove('hidden')
  body.style.overflow = 'hidden';
}

function closeModalReg() {
  const modalWindowRegister = document.querySelector(".modal-window_registration");
  modalWindowRegister.classList.add('hidden')
  backgroundModalWindow.classList.add('hidden')
  body.style.overflowY = 'scroll';
}

buttonRegister.addEventListener('click', () => {
  openModalReg()
})

buttonCloseModalWindowRegister.addEventListener('click', () => {
  closeModalReg()
})

alreadyReg.addEventListener('click', () => {
  openModalLog();
  modalWindowRegister.classList.add('hidden')
})

// modal login ==================================================//

const btnOpenModalWindowLogin = document.querySelector('.header_main-container_button');
const btnCloseModalWindowLogin = document.querySelector('.cross_close-modal-window-login');

function openModalLog() {
  const modalWindowLogin = document.querySelector('.modal-window_login')
  modalWindowLogin.classList.remove('hidden')
  backgroundModalWindow.classList.remove('hidden')
  body.style.overflow = 'hidden';
}
function closeModalLog() {
  const modalWindowLogin = document.querySelector('.modal-window_login')
  modalWindowLogin.classList.add('hidden')
  backgroundModalWindow.classList.add('hidden')
  body.style.overflowY = 'scroll';
}

if (btnOpenModalWindowLogin) {
  btnOpenModalWindowLogin.addEventListener('click', () => {
    openModalLog()
  })
}

btnCloseModalWindowLogin.addEventListener('click', () => {
  closeModalLog()
})

// burger menu =====================================
const btnBurgerMenu = document.querySelector('.hamburger-lines');
const closeBurgerMenu = document.querySelector('.mobile-nav__close');
const mobileNav = document.querySelector('.mobile-nav');


btnBurgerMenu.addEventListener('click', () => {
  backgroundModalWindow.classList.remove('hidden')
  mobileNav.classList.toggle('hidden_mobile-nav')
  body.style.overflow = 'hidden';
})

closeBurgerMenu.addEventListener('click', () => {
  closeBurger()
})


function closeBurger() {
  backgroundModalWindow.classList.add('hidden')
  mobileNav.classList.add('hidden_mobile-nav')
  body.style.overflowY = 'scroll';
}

const btnRegInBurger = document.querySelector('.mobile-nav__menu-link.button-register');

btnRegInBurger.addEventListener('click', () => {
  openModalReg()
  mobileNav.classList.add('hidden_mobile-nav')
})


