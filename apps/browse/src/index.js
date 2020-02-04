import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Browse } from './containers/browse';

export function render({ mount, pushState, events }) {
  console.log('render browse');

  ReactDOM.render(<Browse pushState={ pushState } events={ events } />, mount);

  return () => {
    console.log('unmount browse');

    ReactDOM.unmountComponentAtNode(mount);
  };
}
