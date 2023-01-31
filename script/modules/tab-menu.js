export default function tabMenuInit() {
  const tabContent = document.querySelectorAll('[data-menu="content"] section');
  const tabMenu = document.querySelectorAll('[data-menu="tab"] li');

  tabContent[0].classList.add('ativo');
  function ativar(i) {
    tabContent.forEach((section) => section.classList.remove('ativo'));
    tabContent[i].classList.add('ativo');
  }

  tabMenu.forEach((img, index) => {
    img.addEventListener('click', () => {
      ativar(index);
    });
  });
}
