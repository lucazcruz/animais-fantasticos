export default class SmoothScroll {
  constructor(links) {
    this.linksInterno = document.querySelectorAll(links);
    this.options = { behavior: 'smooth', block: 'start' };
    this.scrolling = this.scrolling.bind(this);
  }

  scrolling(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addEventLink() {
    this.linksInterno.forEach((link) => {
      link.addEventListener('click', this.scrolling);
    });
  }

  init() {
    this.addEventLink();
  }
}
