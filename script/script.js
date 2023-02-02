import SmoothScroll from './modules/scroll-smooth.js';

import accordionInit from './modules/accordion-list.js';
import scrollAnimationInit from './modules/scroll-animation.js';
import tabMenuInit from './modules/tab-menu.js';
import tooltipInit from './modules/tooltip.js';
import modalInit from './modules/modal.js';
import openMenuInit from './modules/down-sobre.js';
import mobileMenuInit from './modules/mobile-menu.js';
import fecthBitcoinInit from './modules/fetch-bitcoin.js';
import openClosed from './modules/horario.js';
import animaisApiInit from './modules/fetch-animais.js';

const smoothScroll = new SmoothScroll('.header-menu a[href^="#"]');
smoothScroll.init();

accordionInit();
scrollAnimationInit();
tabMenuInit();
tooltipInit();
modalInit();
openMenuInit();
mobileMenuInit();
fecthBitcoinInit();
openClosed();
animaisApiInit();
