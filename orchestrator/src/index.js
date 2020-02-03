import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ModuleLoader } from 'module-loader-react';
import { modules } from './config';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <ModuleLoader { ...modules.navbar } as="header" />
    <Switch>
      <Route path="/" exact render={ () => <ModuleLoader { ...modules.landing } /> } />
      <Route path="/browse/:id" render={ () => <ModuleLoader { ...modules.product } /> } />
      <Route path="/browse" render={ () => <ModuleLoader { ...modules.browse } /> } />
    </Switch>
  </Router>
, root);
