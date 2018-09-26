import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Registration'
import Profile from './Components/Profile'
import {Route} from 'react-router-dom'
import Welcome from './Components/Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Welcome} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path="/Profile" component={Profile} />
      </div>
    );
  }
}
export default App;
