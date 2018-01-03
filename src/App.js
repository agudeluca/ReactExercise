import React, { Component } from 'react';
import './App.css';
import ViewMain from './views';

import store from './stores';
import { Provider } from 'react-redux';
class App extends Component {

  render() {
     
    return (
      <Provider store={ store }>
      <ViewMain/>
      </Provider>
    );
  }
}

export default App;
