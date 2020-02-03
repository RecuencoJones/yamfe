export function render({ mount, pushState }) {
  console.log('render browse');
  const main = document.createElement('main');

  const text = document.createTextNode('This is product list page');

  const link = document.createElement('a');

  link.href = '/browse/1';
  link.text = 'Go to product';

  link.addEventListener('click', (event) => {
    event.preventDefault();
    pushState(event.target.attributes.href.value);
  });

  main.appendChild(text);
  main.appendChild(link);

  mount.appendChild(main);
}

export function remove({ mount }) {
  while (mount.firstChild) {
    mount.firstChild.remove();
  }
}
