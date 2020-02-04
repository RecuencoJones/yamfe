import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { ModuleLoader } from 'module-loader-react';
import { EventEmitter } from 'eventemitter3';
import { modules } from './config';

const events = new EventEmitter();
const root = document.getElementById('root');

function App() {
  const history = useHistory();
  const { search, pathname } = useLocation();

  const handlePushState = (href) => history.push(href);

  return (
    <>
      <ModuleLoader { ...modules.navbar } as="header" onPushState={ handlePushState } events={ events } />
      <Switch>
        <Route path="/" exact render={ () => <ModuleLoader { ...modules.landing } onPushState={ handlePushState } events={ events } /> } />
        <Route path="/browse/:id" render={ () => <ModuleLoader { ...modules.product } onPushState={ handlePushState } events={ events } /> } key={ pathname } />
        <Route path="/browse" render={ () => <ModuleLoader { ...modules.browse } onPushState={ handlePushState } events={ events } />  } key={ search } />
        <Route path="/basket" render={ () => <ModuleLoader { ...modules.basket } onPushState={ handlePushState } events={ events } />  } />
      </Switch>
    </>
  );
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
), root);
