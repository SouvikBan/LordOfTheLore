import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShowScore extends Component {
  render() {
    return (
      <div className="Score">
        <h3>Your score in this Quiz is:{this.props.Score}</h3>
      </div>
    );
  }
}

const mapStateToProps = state =>{
    return {
        Score:state.Score
    }
}
export default connect(mapStateToProps)(ShowScore)
