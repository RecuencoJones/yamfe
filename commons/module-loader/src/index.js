export function moduleLoader({ src, entry, mount, pushState }) {
  const script = document.createElement('script');

  script.src = src;

  script.addEventListener('load', () => {
    window[entry]?.render?.({
      mount,
      pushState
    });
  });

  document.body.appendChild(script);

  return () => {
    window[entry]?.remove?.({
      mount
    });

    document.body.removeChild(script);
  };
}
