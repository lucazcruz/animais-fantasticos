(()=>{"use strict";function t(t,e,n){const o=document.documentElement,i="data-outside";function s(a){t.contains(a.target)||(t.removeAttribute(i),e.forEach((t=>{o.removeEventListener(t,s)})),n())}t.hasAttribute(i)||(setTimeout((()=>{e.forEach((t=>o.addEventListener(t,s)))})),t.setAttribute(i,""))}new class{constructor(t){this.linksInterno=document.querySelectorAll(t),this.options={behavior:"smooth",block:"start"},this.scrolling=this.scrolling.bind(this)}scrolling(t){t.preventDefault();const e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addEventLink(){this.linksInterno.forEach((t=>{t.addEventListener("click",this.scrolling)}))}init(){this.addEventLink()}}('.header-menu a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){this.addAccordionEvent()}}('[data-accordion="list"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>t.classList.remove(this.activeClass))),this.tabContent[t].classList.add(this.activeClass)}addTabMenuEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.addTabMenuEvent(),this.activeTab(0),this}}('[data-menu="tab"] li','[data-menu="content"] section').init(),new class{constructor(t,e,n){this.openButton=document.querySelector(t),this.closeButton=document.querySelector(e),this.modalContainer=document.querySelector(n),this.eventToggleModal=this.eventToggleModal.bind(this),this.outsidModal=this.outsidModal.bind(this)}eventToggleModal(t){t.preventDefault(),this.modalContainer.classList.toggle("ativo")}outsidModal(t){t.target===this.modalContainer&&this.eventToggleModal(t)}addModalEvent(){this.openButton.addEventListener("click",this.eventToggleModal),this.closeButton.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.outsidModal)}init(){return this.addModalEvent(),this}}('[data-modal="open"]','[data-modal="close"]','[data-modal="container"]').init(),function(){const t=document.querySelector("[data-tooltip]"),e={handleEvent(t){this.element.style.top=`${t.pageY+20}px`,this.element.style.left=`${t.pageX+20}px`}},n={handleEvent(){this.element.remove(),t.removeEventListener("mousemove",e),t.removeEventListener("mouseleave",n)}};t.addEventListener("mouseover",(function(){const t=(()=>{const t=document.createElement("span");return t.classList.add("tooltip"),t.innerText="Endereço próximo ao estacionamento",document.body.appendChild(t),t})();n.element=t,e.element=t,this.addEventListener("mousemove",e),this.addEventListener("mouseleave",n)}))}(),function(){const e=document.querySelector('[data-menu="sobre"]'),n=document.querySelector('[data-menu="sobre"] ul'),o=["touchstart","click"];function i(i){i.preventDefault(),n.classList.add("ativo"),t(e,o,(()=>{n.classList.remove("ativo")}))}o.forEach((t=>{e.addEventListener(t,i)}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),o=["touchstart","click"];function i(){n.classList.add("ativo"),e.classList.add("ativo"),t(n,o,(()=>{n.classList.remove("ativo"),e.classList.remove("ativo")}))}o.forEach((t=>e.addEventListener(t,i)))}(),function(){const t=document.querySelector('[data-price="bitcoin"]');fetch("https://blockchain.info/ticker").then((t=>t.json())).then((e=>{t.innerText=(1e3/e.BRL.buy).toFixed(4)})).catch((t=>console.log(Error(t))))}(),function(){const t=document.querySelector("[data-horario]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=(new Date).getDay(),i=(new Date).getHours();e.includes(o)&&i>=n[0]&&i<n[1]&&t.classList.add("open")}(),async function(t){try{const t=fetch("./animaisapi.json");(await(await t).json()).forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3 data-animais="nome">${t.specie}</h3><span data-numero>${t.numeros}</span>`,e}(t);document.querySelector(".grid-animais").appendChild(e)})),function(){const t=new MutationObserver((function(){document.querySelectorAll("[data-numero]").forEach((t=>{const e=t.innerText,n=Math.floor(e/100);let o=0;const i=setInterval((()=>{o+=n,t.innerText=o,o>e&&(clearInterval(i),t.innerText=e)}),25*Math.random())})),t.disconnect()})),e=document.querySelector("#numeros");t.observe(e,{attributes:!0})}()}catch(t){console.log(t)}}(),function(){const t=document.querySelectorAll('[data-animation="scroll"]');t[0].classList.add("ativo"),window.addEventListener("scroll",(()=>{t.forEach((t=>{const e=.6*window.innerHeight,{top:n}=t.getBoundingClientRect();n<e&&!t.classList.contains("ativo")?t.classList.add("ativo"):n>e&&t.classList.contains("ativo")&&t.classList.remove("ativo")}))}))}()})();