import SmoothScroll from './modules/scroll-smooth.js';
import Accordion from './modules/accordion-list.js';
import TabMenu from './modules/tab-menu.js';
import Modal from './modules/modal.js';
import fetchAnimais from './modules/fetch-animais.js';
import fecthBitcoin from './modules/fetch-bitcoin.js';
import Tooltip from './modules/tooltip.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropdownMenu from './modules/dropdown-menu.js';

import mobileMenuInit from './modules/mobile-menu.js';
import openClosed from './modules/horario.js';

const smoothScroll = new SmoothScroll('.header-menu a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-accordion="list"] dt');
accordion.init();

const tabMenu = new TabMenu('[data-menu="tab"] li', '[data-menu="content"] section');
tabMenu.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-animation="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

mobileMenuInit();
openClosed();

fetchAnimais('./animaisapi.json', '.grid-numeros');

fecthBitcoin('https://blockchain.info/ticker', '[data-price="bitcoin"]');
