import closeMenu from './close-menu.js';

export default class DropdownMenu {
  constructor(elements, events) {
    this.elements = document.querySelectorAll(elements);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdown = this.activeDropdown.bind(this);
  }

  activeDropdown(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.add('ativo');
    closeMenu(element, this.events, () => {
      element.classList.remove('ativo');
    });
  }

  init() {
    this.elements.forEach((element) => {
      this.events.forEach((event) => {
        element.addEventListener(event, this.activeDropdown);
      });
    });
    return this;
  }
}
