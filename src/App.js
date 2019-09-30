import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import InitApp from './components/init/init';
import LoginPage from './pages/loginPage/loginPage';
import MapOverviewPage from './pages/mapOverviewPage/mapOverviewPage'; 
import AttractionsPage from './pages/attractionsPage/attractionsPage'; 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <InitApp/>
        <Switch>
            <Route path="/" exact component={AttractionsPage}/>
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
