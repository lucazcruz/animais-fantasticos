export default function fecthBitcoinInit() {
  const btc = document.querySelector('[data-price="bitcoin"]');
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      btc.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
