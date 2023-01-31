export default function openClosed() {
  const element = document.querySelector('[data-horario]');
  const semana = element.dataset.semana.split(',').map(Number);
  const horario = element.dataset.horario.split(',').map(Number);

  const today = new Date().getDay();
  const hours = new Date().getHours();
  const condition = (semana.includes(today)) && (hours >= horario[0] && hours < horario[1]);

  if (condition) {
    element.classList.add('open');
  }
}
