import closeMenu from './close-menu.js';

export default class MobileMenu {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add('ativo');
    this.menuButton.classList.add('ativo');
    closeMenu(this.menuList, this.events, () => {
      this.menuList.classList.remove('ativo');
      this.menuButton.classList.remove('ativo');
    });
  }

  addMenuEvents() {
    this.events.forEach((event) => this.menuButton.addEventListener(event, this.openMenu));
  }

  init() {
    this.addMenuEvents();
    return this;
  }
}
