export default function scrollAnimationInit() {
  const sections = document.querySelectorAll('[data-animation="scroll"]');
  sections[0].classList.add('ativo');

  window.addEventListener('scroll', () => {
    sections.forEach((section) => {
      const alturaMedia = window.innerHeight * 0.6;
      const { top } = section.getBoundingClientRect();

      if (top < alturaMedia && !section.classList.contains('ativo')) {
        section.classList.add('ativo');
      } else if (top > alturaMedia && section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  });
}
