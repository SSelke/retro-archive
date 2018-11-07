import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as actions from './action';
import Header from './containers/partials/Header';
import Landing from './containers/Landing';
import AuthRoutes from './AuthRoutes';
import SearchResults from './containers/Search/Search';
import ShowGame from './containers/Games/Show'; 
import SignUp from './containers/Oauth/sign_up';
import Auth from './components/hoc/auth';
import Modal from './components/Modal/RootModal';
import './App.css';


class App extends Component {

  render() {

    return (
      <div className="App h-100">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/games/:id" component={ShowGame} />
              <Route path="/search/:keyword" component={SearchResults} />
              <Route path="/users/:route" component={Auth(AuthRoutes)} />
              <Route path="/sign_up" component={SignUp}/>
              <Route path="/" component={Landing} />
            </Switch>
            <Modal/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
