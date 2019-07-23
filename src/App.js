import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/loginPage/loginPage';
import MapOverviewPage from './pages/mapOverviewPage/mapOverviewPage'; 
import AttractionsPage from './pages/attractionsPage/attractionsPage'; 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/mapoverview" component={MapOverviewPage}/>
            <Route path="/attractions" component={AttractionsPage}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
