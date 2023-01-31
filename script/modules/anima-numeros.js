export default function animaNumeros() {
  function animaNum() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const num = numero.innerText;
      const incremento = Math.floor(num / 100);

      let i = 0;
      const interval = setInterval(() => {
        i += incremento;
        numero.innerText = i;
        if (i > num) {
          clearInterval(interval);
          numero.innerText = num;
        }
      }, Math.random() * 25);
    });
  }

  function callback() {
    animaNum();
    observer.disconnect();
  }

  const observer = new MutationObserver(callback);
  const target = document.querySelector('#numeros');
  observer.observe(target, { attributes: true });
}
