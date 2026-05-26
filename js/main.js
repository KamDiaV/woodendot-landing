  const burgerButton = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.header__menu');

  burgerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu--open');

    burgerButton.classList.toggle('header__burger--active');
  });