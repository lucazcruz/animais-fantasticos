export default function accordionInit() {
  const dt = document.querySelectorAll('[data-accordion="list"] dt');

  function ativar(e) {
    e.target.classList.toggle('ativo');
    e.target.nextElementSibling.classList.toggle('ativo');
  }

  dt.forEach((item) => {
    item.addEventListener('click', (e) => {
      ativar(e);
    });
  });
}
