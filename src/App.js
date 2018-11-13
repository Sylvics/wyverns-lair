import React, { Component } from 'react';
import './reset.css';
import './App.css';
import routes from './routes.js'
import Nav from './Components/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div className='App'>
      <div className="headRemain">
        <Nav></Nav>
        </div>
      <div>
        {routes}
      </div>
      </div>
    );
  }
}

export default App;
