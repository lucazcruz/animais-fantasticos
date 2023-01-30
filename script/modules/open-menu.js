import closeMenu from "./close-menu.js";

export default function openSobreMenuInit() {
    const sobre = document.querySelector('[data-menu="sobre"]')
    const menu = document.querySelector('[data-menu="sobre"] ul')
    const events = ['touchstart', 'click']
    
    function ativar(e) {
        e.preventDefault();
        menu.classList.add('ativo')
        closeMenu(sobre, events, () => {
            menu.classList.remove('ativo')
        });
    }

    events.forEach(event => {
        sobre.addEventListener(event, ativar);
    })
}