export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.alturaMedia = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.offset > 0) {
        item.element.classList.remove('ativo');
      }
    });
  }

  getDistance() {
    this.distance = [...this.sections].map((item) => {
      const offset = item.offsetTop;
      return {
        element: item,
        offset: offset - this.alturaMedia,
      };
    });
  }

  init() {
    this.getDistance();
    this.checkDistance();
    window.addEventListener('scroll', this.checkDistance);
    return this;
  }

  stop() {
    this.sections.forEach((section) => {
      section.classList.add('ativo');
    });
    window.removeEventListener('scroll', this.checkDistance);
  }
}
