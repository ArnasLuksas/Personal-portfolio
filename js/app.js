//toggle mobile navigation menu
const burgerLogo = document.querySelector('.lines');
const mobNav = document.querySelector('.nav-list');

//add or remove show class when clicking on burger logo
burgerLogo.addEventListener('click', (e) => {
  mobNav.classList.toggle('show');
});

//remove show class when clicking on nav menu li
mobNav.addEventListener('click', (e) => {
  const item = e.target.innerHTML;
  if (item) {
    mobNav.classList.remove('show');
  }
});
