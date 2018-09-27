import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getuserdetails,deleteuser} from '../Actions/users.action'
import ButtonStyle from '../Commons/ButtonStyle'

class UserDetail extends Component {
  componentDidMount(){  
    this.props.getUsers()
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
