export default class Funcionamento {
  constructor(element) {
    this.element = document.querySelector(element);
  }

  getFuncionamento() {
    this.semana = this.element.dataset.semana.split(',').map(Number);
    this.horario = this.element.dataset.horario.split(',').map(Number);
  }

  getNow() {
    this.today = new Date().getDay();
    this.hours = new Date().getUTCHours() - 3;
  }

  verification() {
    const semana = (this.semana.includes(this.today));
    const hour = (this.hours >= this.horario[0] && this.hours < this.horario[1]);
    return semana && hour;
  }

  init() {
    this.getFuncionamento();
    this.getNow();
    if (this.verification()) {
      this.element.classList.add('open');
    }
    return this;
  }
}
