import React, { Component } from 'react'
import Login from './Components/Login'
import MainPage from './Components/MainPage'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route  path="/Login" component={Login} />
        <Route exact path="/MainPage" component={MainPage} />
      </div>
    );
  }
}
export default App;
