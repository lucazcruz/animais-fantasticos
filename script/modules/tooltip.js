export default function tooltipInit() {
  const tooltip = document.querySelector('[data-tooltip]');

  const tooltipBox = () => {
    const box = document.createElement('span');
    box.classList.add('tooltip');
    box.innerText = 'Endereço próximo ao estacionamento';
    document.body.appendChild(box);
    return box;
  };

  const onMouseMove = {
    handleEvent(e) {
      this.element.style.top = `${e.pageY + 20}px`;
      this.element.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.element.remove();
      tooltip.removeEventListener('mousemove', onMouseMove);
      tooltip.removeEventListener('mouseleave', onMouseLeave);
    },
  };

  function onMouseOver() {
    const box = tooltipBox();

    onMouseLeave.element = box;
    onMouseMove.element = box;

    this.addEventListener('mousemove', onMouseMove);
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltip.addEventListener('mouseover', onMouseOver);
}
