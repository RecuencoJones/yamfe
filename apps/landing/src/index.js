import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Landing } from './containers/landing';

export function render({ mount }) {
  console.log('render landing');

  ReactDOM.render(<Landing />, mount);
}

export function remove({ mount }) {
  ReactDOM.unmountComponentAtNode(mount);
}
