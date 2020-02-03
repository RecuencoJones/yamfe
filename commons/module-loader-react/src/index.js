import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { moduleLoader } from 'module-loader';

export function ModuleLoader({ src, entry, as }) {
  const ref = React.useRef();
  const history = useHistory();
  const MountEl = as || 'div'

  React.useLayoutEffect(() => {
    const moduleUnloader = moduleLoader({
      src,
      entry,
      mount: ref.current,
      pushState: history.push
    })

    return () => {
      moduleUnloader();
    };
  }, [ src, entry ]);

  return <MountEl id={ `render-${ entry }` } ref={ ref } />;
}
