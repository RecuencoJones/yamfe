import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Landing } from './containers/landing';

export function render({ mount, pushState }) {
  console.log('render landing');

  ReactDOM.render(<Landing pushState={ pushState } />, mount);

  return () => {
    console.log('unmount landing');

    ReactDOM.unmountComponentAtNode(mount);
  };
}
