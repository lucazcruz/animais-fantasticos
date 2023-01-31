import closeMenu from './close-menu.js';

export default function mobileMenuInit() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ['touchstart', 'click'];

  function openMenu() {
    menuList.classList.add('ativo');
    menuButton.classList.add('ativo');
    closeMenu(menuList, events, () => {
      menuList.classList.remove('ativo');
      menuButton.classList.remove('ativo');
    });
  }

  events.forEach((event) => menuButton.addEventListener(event, openMenu));
}
