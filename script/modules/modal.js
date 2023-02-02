export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsidModal = this.outsidModal.bind(this);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle('ativo');
  }

  outsidModal(event) {
    if (event.target === this.modalContainer) {
      this.eventToggleModal(event);
    }
  }

  addModalEvent() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outsidModal);
  }

  init() {
    this.addModalEvent();
    return this;
  }
}
