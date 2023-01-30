export default function accordionInit() {
    const dTitles = document.querySelectorAll('[data-accordion="list"] dt')
    dTitles[0].classList.toggle('ativo');
    dTitles[0].nextElementSibling.classList.toggle('ativo');

    dTitles.forEach(item => {
        item.addEventListener('click', (e) => {
            e.target.classList.toggle('ativo');
            e.target.nextElementSibling.classList.toggle('ativo');
        });
    });
};