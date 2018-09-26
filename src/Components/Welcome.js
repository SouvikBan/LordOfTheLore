import React, { Component } from 'react'
import Card from '../Commons/Card'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <h1>LORD OF THE LORE</h1>
        <Card text={{content:'Sign In',url:'/Login'}} />
        <Card text={{content:'Registration',url:'/Register'}}/>
      </div>
    );
  }
}
export default Welcome
