//selecting items from DOM
const burgerLogo = document.querySelector('.lines');
const mobNav = document.querySelector('.nav-list');

//toogle mobile nav
burgerLogo.addEventListener('click', () => {
  showNav();
});
const showNav = () => {
  mobNav.classList.toggle('show');
};

//after selecting item from list, we close the mobile nav
mobNav.addEventListener('click', (e) => {
  closeNav(e);
});
const closeNav = (e) => {
  const item = e.target.innerHTML;
  if (item) {
    mobNav.classList.remove('show');
  }
};
