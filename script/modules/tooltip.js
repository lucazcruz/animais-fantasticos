export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  tooltipBox(element) {
    const box = document.createElement('span');
    const text = element.getAttribute('aria-label');
    box.classList.add('tooltip');
    box.innerText = text;
    document.body.appendChild(box);
    this.box = box;
  }

  onMouseMove(e) {
    if (e.pageX + 195 < window.innerWidth) {
      this.box.style.left = `${e.pageX + 20}px`;
    } else {
      this.box.style.left = `${e.pageX - 180}px`;
    }
    this.box.style.top = `${e.pageY + 20}px`;
  }

  onMouseLeave({ currentTarget }) {
    this.box.remove();
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
  }

  onMouseOver({ currentTarget }) {
    this.tooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTooltipEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    this.addTooltipEvent();
    return this;
  }
}
