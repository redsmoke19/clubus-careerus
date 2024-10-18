const burger = document.querySelector('.burger');
const mainNav = document.querySelector('.main-nav');

const breakpoint = window.matchMedia('(max-width: 1023px)');

const onDocumentClick = (evt) => {
  const target = evt.target;
  if (target.closest('.main-nav') || target.closest('.burger')) {
    return;
  }
  closeMenu();
}

const onDocumentKeydown = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    closeMenu();
  }
}

const openMenu = () => {
  burger.classList.add('is-active');
  mainNav.classList.add('is-active');
  burger.ariaPressed = 'true';

  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

const closeMenu = () => {
  burger.classList.remove('is-active');
  mainNav.classList.remove('is-active');
  burger.ariaPressed = 'false';

  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onBurgerToggler = (evt) => {
  evt.preventDefault();
  if (burger.classList.contains('is-active')) {
    closeMenu();
    return;
  }
  openMenu();
}

const breakpointChecker = () => {
  if (burger.classList.contains('is-active') && !breakpoint.matches) {
    closeMenu();
  }
}

const initBurger = () => {
  breakpointChecker();
  breakpoint.addEventListener('change', breakpointChecker);
  burger.addEventListener('click', onBurgerToggler);
}

export {initBurger, closeMenu};

