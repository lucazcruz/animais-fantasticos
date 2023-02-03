export default function fecthBitcoin(url, element) {
  const precoBitcoin = document.querySelector(element);
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      precoBitcoin.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
