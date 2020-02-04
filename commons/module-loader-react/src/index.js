import * as React from 'react';
import { moduleLoader } from 'module-loader';

export function ModuleLoader({ src, entry, as, onPushState, events }) {
  const ref = React.useRef();
  const MountEl = as || 'div'

  React.useLayoutEffect(() => {
    const moduleUnloader = moduleLoader({
      src,
      entry,
      mount: ref.current,
      pushState: onPushState,
      events
    })

    return () => {
      moduleUnloader();
    };
  }, [ src, entry ]);

  return <MountEl id={ `render-${ entry }` } ref={ ref } />;
}
