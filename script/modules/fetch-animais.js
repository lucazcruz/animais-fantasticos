import animaNumeros from './anima-numeros.js';

export default function animaisApiInit() {
  function createAnimais(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3 data-animais="nome">${animal.specie}</h3><span data-numero>${animal.numeros}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const promise = fetch(url);
      const responseJson = await (await promise).json();
      responseJson.forEach((animal) => {
        const div = createAnimais(animal);
        document.querySelector('.grid-animais').appendChild(div);
      });
      animaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json');
}
