export default function smoothScrollInit() {
  const linksInterno = document.querySelectorAll('.header-menu a[href^="#"]');

  function scrolling(e) {
    const href = e.target.getAttribute('href');
    const section = document.querySelector(href);
    const { top } = section.getBoundingClientRect();
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }

  linksInterno.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrolling(e);
    });
  });
}
