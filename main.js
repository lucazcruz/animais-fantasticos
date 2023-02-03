(()=>{"use strict";class t{constructor(t,e,n){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=n,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=t.innerText,n=Math.floor(e/100);let o=0;const s=setInterval((()=>{o+=n,t.innerText=o,o>e&&(clearInterval(s),t.innerText=e)}),25*Math.random())}animaNumeros(){this.numeros.forEach((e=>t.incrementarNumero(e)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.addMutationObserver(),this}}function e(t,e,n){const o=document.documentElement,s="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(s),e.forEach((t=>{o.removeEventListener(t,i)})),n())}t.hasAttribute(s)||(setTimeout((()=>{e.forEach((t=>o.addEventListener(t,i)))})),t.setAttribute(s,""))}new class{constructor(t){this.linksInterno=document.querySelectorAll(t),this.options={behavior:"smooth",block:"start"},this.scrolling=this.scrolling.bind(this)}scrolling(t){t.preventDefault();const e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addEventLink(){this.linksInterno.forEach((t=>{t.addEventListener("click",this.scrolling)}))}init(){this.addEventLink()}}('.header-menu a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){this.addAccordionEvent()}}('[data-accordion="list"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>t.classList.remove(this.activeClass))),this.tabContent[t].classList.add(this.activeClass)}addTabMenuEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.addTabMenuEvent(),this.activeTab(0),this}}('[data-menu="tab"] li','[data-menu="content"] section').init(),new class{constructor(t,e,n){this.openButton=document.querySelector(t),this.closeButton=document.querySelector(e),this.modalContainer=document.querySelector(n),this.eventToggleModal=this.eventToggleModal.bind(this),this.outsidModal=this.outsidModal.bind(this)}eventToggleModal(t){t.preventDefault(),this.modalContainer.classList.toggle("ativo")}outsidModal(t){t.target===this.modalContainer&&this.eventToggleModal(t)}addModalEvent(){this.openButton.addEventListener("click",this.eventToggleModal),this.closeButton.addEventListener("click",this.eventToggleModal),this.modalContainer.addEventListener("click",this.outsidModal)}init(){return this.addModalEvent(),this}}('[data-modal="open"]','[data-modal="close"]','[data-modal="container"]').init(),function(){const t=document.querySelector("[data-tooltip]"),e={handleEvent(t){this.element.style.top=`${t.pageY+20}px`,this.element.style.left=`${t.pageX+20}px`}},n={handleEvent(){this.element.remove(),t.removeEventListener("mousemove",e),t.removeEventListener("mouseleave",n)}};t.addEventListener("mouseover",(function(){const t=(()=>{const t=document.createElement("span");return t.classList.add("tooltip"),t.innerText="Endereço próximo ao estacionamento",document.body.appendChild(t),t})();n.element=t,e.element=t,this.addEventListener("mousemove",e),this.addEventListener("mouseleave",n)}))}(),function(){const t=document.querySelector('[data-menu="sobre"]'),n=document.querySelector('[data-menu="sobre"] ul'),o=["touchstart","click"];function s(s){s.preventDefault(),n.classList.add("ativo"),e(t,o,(()=>{n.classList.remove("ativo")}))}o.forEach((e=>{t.addEventListener(e,s)}))}(),function(){const t=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),o=["touchstart","click"];function s(){n.classList.add("ativo"),t.classList.add("ativo"),e(n,o,(()=>{n.classList.remove("ativo"),t.classList.remove("ativo")}))}o.forEach((e=>t.addEventListener(e,s)))}(),function(){const t=document.querySelector('[data-price="bitcoin"]');fetch("https://blockchain.info/ticker").then((t=>t.json())).then((e=>{t.innerText=(1e3/e.BRL.buy).toFixed(4)})).catch((t=>console.log(Error(t))))}(),function(){const t=document.querySelector("[data-horario]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=(new Date).getDay(),s=(new Date).getHours();e.includes(o)&&s>=n[0]&&s<n[1]&&t.classList.add("open")}(),function(){const t=document.querySelectorAll('[data-animation="scroll"]');t[0].classList.add("ativo"),window.addEventListener("scroll",(()=>{t.forEach((t=>{const e=.6*window.innerHeight,{top:n}=t.getBoundingClientRect();n<e&&!t.classList.contains("ativo")?t.classList.add("ativo"):n>e&&t.classList.contains("ativo")&&t.classList.remove("ativo")}))}))}(),async function(){try{const e=fetch("./animaisapi.json"),n=await(await e).json(),o=document.querySelector(".grid-numeros");n.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3 data-animais="nome">${t.specie}</h3><span data-numero>${t.numeros}</span>`,e}(t);o.appendChild(e)})),new t("[data-numero]","#numeros","ativo").init()}catch(t){console.log(t)}}()})();