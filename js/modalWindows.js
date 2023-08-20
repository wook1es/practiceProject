const backgroundModalWindow = document.querySelector(".background_modal-window");

backgroundModalWindow.addEventListener('click', () => {
  closeModalReg()
  closeModalLog()
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
  body.style.overflow = 'scroll';
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
  body.style.overflow = 'scroll';
}

if (btnOpenModalWindowLogin) {
  btnOpenModalWindowLogin.addEventListener('click', () => {
    openModalLog()
  })
}

btnCloseModalWindowLogin.addEventListener('click', () => {
  closeModalLog()
})


// modal payment =====================================
const bntOpenModalPayment = document.querySelector('.payment__header-payment-method')

// bntOpenModalPayment.o