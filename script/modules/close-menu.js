export default function closeMenu(target, events, callback) {
    const html = document.documentElement;
    setTimeout(()=> {
        events.forEach(event => {
            html.addEventListener(event, close)
        })
    })

    function close(e) {
        if (!target.contains(e.target)) {
            callback();
            events.forEach(event => {
                html.removeEventListener(event, close)
            })
        }
    }
}