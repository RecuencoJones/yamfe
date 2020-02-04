export function moduleLoader({ src, entry, mount, pushState, events }) {
  const script = document.createElement('script');
  let remove

  script.src = src;

  script.addEventListener('load', async () => {
    remove = await window[entry]?.render?.({
      mount,
      pushState,
      events
    });
  });

  document.body.appendChild(script);

  return () => {
    remove?.();

    document.body.removeChild(script);
  };
}
