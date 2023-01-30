export default function animaNumeros() {
    function animaNum() {
        const numeros = document.querySelectorAll('[data-numero]');
        numeros.forEach(numero => {
            const num = numero.innerText;
            let i = 0
            let incremento =  Math.floor(num /100)
            
            const interval = setInterval(()=> {
                i += incremento
                numero.innerText = i
                if(i > num) {
                    clearInterval(interval);
                    numero.innerText = num
                }
            }, Math.random() * 25);
        });
    }
    
    function callback() {
        animaNum();
        observer.disconnect()
    };
    
    const target = document.querySelector('#numeros')
    const observer = new MutationObserver(callback)
    observer.observe(target, { attributes: true})
}
