import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import * as actions from './action';
import Header from './containers/partials/Header';
import Landing from './containers/Landing';
import Dashboard from './containers/Dashboard/Dashboard';
import SearchResults from './containers/Search/Search';
import ShowGame from './containers/Games/Show';
import ShowConsole from './containers/Consoles/Show';
import Auth from './components/hoc/auth';


class App extends Component {

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/consoles/:console" component={ShowConsole} />
              <Route path="/games/:id" component={ShowGame} />
              <Route path="/search/:keyword" component={SearchResults} />
              <Route path="/dashboard" component={Auth(Dashboard)} />
              <Route path="/" component={Landing} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
