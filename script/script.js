import SmoothScroll from './modules/scroll-smooth.js';
import Accordion from './modules/accordion-list.js';
import TabMenu from './modules/tab-menu.js';
import Modal from './modules/modal.js';
import fetchAnimais from './modules/fetch-animais.js';

import tooltipInit from './modules/tooltip.js';
import openMenuInit from './modules/down-sobre.js';
import mobileMenuInit from './modules/mobile-menu.js';
import fecthBitcoinInit from './modules/fetch-bitcoin.js';
import openClosed from './modules/horario.js';
import scrollAnimationInit from './modules/scroll-animation.js';

const smoothScroll = new SmoothScroll('.header-menu a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-accordion="list"] dt');
accordion.init();

const tabMenu = new TabMenu('[data-menu="tab"] li', '[data-menu="content"] section');
tabMenu.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

tooltipInit();
openMenuInit();
mobileMenuInit();
fecthBitcoinInit();
openClosed();
scrollAnimationInit();

fetchAnimais('./animaisapi.json', '.grid-numeros');
