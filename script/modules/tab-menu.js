export default class TabMenu {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabContent.forEach((section) => section.classList.remove(this.activeClass));
    this.tabContent[index].classList.add(this.activeClass);
  }

  addTabMenuEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    this.addTabMenuEvent();
    this.activeTab(0);
    return this;
  }
}
