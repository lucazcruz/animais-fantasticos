export default function fecthBitcoinInit() {
    const price = document.querySelector('[data-price="bitcoin"]')
    fetch('https://blockchain.info/ticker')
        .then(r => r.json())
        .then(r => {
            price.innerText= (1000 / r.BRL.buy).toFixed(4)
        })
        .catch(erro => {
            console.log(Error(erro))
        })
}