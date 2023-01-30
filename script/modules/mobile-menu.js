import closeMenu from './close-menu.js';

export default function mobileMenuInit() {
    const menu =document.querySelector('[data-menu="button"]');
    const menuList =document.querySelector('[data-menu="list"]');
    const events = ['touchstart', 'click'];
    
    function openMenu(e) {
        menuList.classList.add('ativo')
        menu.classList.add('ativo')
        closeMenu(menuList, events, () => {
            menuList.classList.remove('ativo')
            menu.classList.remove('ativo')
        })
    }
        
    events.forEach(event => {
        menu.addEventListener(event, openMenu)
    })
}