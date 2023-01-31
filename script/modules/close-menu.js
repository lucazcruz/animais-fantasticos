export default function closeMenu(target, events, callback) {
  const html = document.documentElement;
  const data = 'data-outside';

  function close(e) {
    if (!target.contains(e.target)) {
      target.removeAttribute(data);
      events.forEach((event) => {
        html.removeEventListener(event, close);
      });
      callback();
    }
  }

  if (!target.hasAttribute(data)) {
    setTimeout(() => {
      events.forEach((event) => html.addEventListener(event, close));
    });
    target.setAttribute(data, '');
  }
}
