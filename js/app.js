//selecting items from DOM
const burgerLogo = document.querySelector('.lines');
const mobNav = document.querySelector('.nav-list');
const stickyNav = document.querySelector('.sticky-nav');

const body = document.querySelector('body');
// console.log(body);
// console.log(stickyNav);

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

// show navigation when get certain point
const topOfNav = stickyNav.offsetTop;
const nav = () => {
  if (window.scrollY >= topOfNav) {
    stickyNav.classList.remove('hide');
    stickyNav.classList.add('show');
  } else {
    stickyNav.classList.remove('show');
    stickyNav.classList.add('hide');
  }
};

window.addEventListener('scroll', nav);
