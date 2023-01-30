export default function closeMenu(target, events, callback) {
    const html = document.documentElement;
    const data = 'data-outside'
    if (!target.hasAttribute(data)) {
        setTimeout(()=> {
            events.forEach(event => html.addEventListener(event, close));
        });
        target.setAttribute(data, '');
    }

    function close(e) {
        if (!target.contains(e.target)) {
            callback();
            events.forEach(event => html.removeEventListener(event, close));
            target.removeAttribute(data);
        }
    }
}