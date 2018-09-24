import React, { Component } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/Profile" component={Profile} />
      </div>
    );
  }
}
export default App;
