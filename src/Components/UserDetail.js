import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getuserdetails,deleteuser} from '../Actions/users.action'
import ButtonStyle from '../Commons/ButtonStyle'
import axios from 'axios'

class UserDetail extends Component {
  state={
    attempts:[]
  }
  componentDidMount(){  
    this.props.getUsers()
    axios.get("http://127.0.0.1:8080/api/scores/"+this.props.Sessions.ID).then(
      res=>{
        console.log(res.data)
        this.setState({attempts:res.data})
      }
    )
  }

  quizrender(){
    console.log(this.state.attempts)
    return this.state.attempts.map((attempt,i) => {
      return(
        <div key={i}>
          <h5>QuizName:</h5>{attempt.quizname}
          <h5>Attempts:</h5>{attempt.attempts}
          <h5>BestScore:</h5>{attempt.bestscore}
        </div>
      )
    })
  }

  AdminDivRender(bool){
    if(bool){
    return(
      <div id="Admin">
        <div><h4>Admin:</h4><span>Yes</span></div>
          <hr/>
          <h4>List Of Users</h4>
          <div>
          {
            this.props.Users.map(user=>{
              return(
                <div key={user.ID}>
                  <div>{user.name}</div>
                  <div onClick={()=>this.props.deleteUsers(user.ID)}><ButtonStyle text={{content:"Delete this user",color:"secondary"}}/></div>
                </div>
              )
            })
          }
          </div> 
      </div>
      )
    }
    else
    {
      return(
        <div id="NotAdmin">
          <h4>Admin:</h4><span>No</span>
        </div>
      )
    }
  }
  render() {
    const {Sessions} =this.props
    if(!Sessions.isAuthenticated){
      return(<h3>Not Logged In.</h3>)
    }
    return (
      <div className="UserDetail">
        <h4>Name:</h4><span>{Sessions.name}</span>
        <h4>E-mail:</h4><span>{Sessions.email}</span>
        <h4>Quiz Attempts:</h4>
        {this.quizrender()}
        {this.AdminDivRender(Sessions.admin)}
      </div>
    );
  }
}


const mapStateToProps = state =>{
  return {
    Sessions:state.Sessions,
    Users:state.Users
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getUsers: () => dispatch(getuserdetails()),
    deleteUsers : payload => dispatch(deleteuser(payload))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserDetail)
