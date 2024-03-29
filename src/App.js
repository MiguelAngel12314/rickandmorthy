import React, {Component} from 'react';
import {BrowserRouter, Route, HashRouter, Link} from 'react-router-dom';
import Home from './pages/home';
import Episodes from './pages/episodes';
import LoginComponent from './component/login';
class App extends Component {

  /**
   * Render Aplication
   */
  render() {
    return (
      <div className="App">
        <BrowserRouter basename="#">
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/episode/:name/:id" component={Episodes} />
        </BrowserRouter>

        <HashRouter basename="#">
            <Link to="#/"  />
            <Link to="#/home"  />
            <Link to="#/episode/:name/:id"  />
        </HashRouter>
      </div>
    );
  }
}

export default App;
