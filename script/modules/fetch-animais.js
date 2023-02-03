import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimais(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3 data-animais="nome">${animal.specie}</h3><span data-numero>${animal.numeros}</span>`;
    return div;
  }

  async function distribuirAnimais() {
    try {
      const promise = fetch(url);
      const animaisJson = await (await promise).json();
      const section = document.querySelector(target);
      animaisJson.forEach((animal) => {
        const div = createAnimais(animal);
        section.appendChild(div);
      });

      const animaNumeros = new AnimaNumeros('[data-numero]', '#numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  distribuirAnimais();
}
