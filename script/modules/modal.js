export default function modalInit() {
  const modal = document.querySelector('[data-modal="container"]');
  const open = document.querySelector('[data-modal="open"]');
  const close = document.querySelector('[data-modal="close"]');

  function openModal(e) {
    e.preventDefault();
    modal.classList.add('ativo');
  }

  function closeModal(e) {
    if (e.target === this) {
      modal.classList.remove('ativo');
    }
  }

  open.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);
  modal.addEventListener('click', closeModal);
}
