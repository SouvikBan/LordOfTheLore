import React,{Component} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {createuser} from '../Actions/users.action'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { ChangeSessionData } from '../Actions/sessions.action'

class Register extends Component{
  constructor(){
    super();
    this.state ={
      name:"",
      email:"",
      password:"",
      redirect:false
    }
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.handleNameChange=this.handleNameChange.bind(this)
    this.handleLogin=this.handleLogin.bind(this)
    this.handleEmailChange=this.handleEmailChange.bind(this)
  }
  
  handleLogin(event) {
      event.preventDefault()
      var user={"name":this.state.name.trim(),"email":this.state.email.trim(),"password":this.state.password.trim(),"admin":false}
      console.log(user)
      this.props.CreateUsers(user)
      this.props.submitSessionsData(user)
      this.setState({redirect:true})

    } 

   handlePasswordChange(event){
    this.setState({password:event.target.value});
  }
   handleNameChange(event){
    this.setState({name:event.target.value})
  }

  handleEmailChange(event){
    this.setState({email:event.target.value})
  }


  render(){
    const styles = theme => (
    {
    layout: {
      width: 'auto',
      display: 'block', 
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: '30vw',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });
  if(this.props.Sessions.isAuthenticated){
    return(
      <Redirect to='/Profile'/>
    )
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={styles.layout}>
        <Paper className={styles.paper}>
          <Avatar className={styles.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="headline">Register</Typography>
          <form className={styles.form}>
            <FormControl margin="normal" required fullWidth>
             <InputLabel htmlFor="name">Username</InputLabel>
             <Input id="name" name="name" autoComplete="name" value={this.state.name} onChange={this.handleNameChange} autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleEmailChange} autoFocus />
           </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password" >Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password} onChange={this.handlePasswordChange}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={styles.submit}
              onClick={this.handleLogin}
            >
              Register
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
    );
  } 
}

const mapStateToProps = state =>{
  return {
      Users:state.Users,
      Sessions:state.Sessions      
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    CreateUsers: payload => dispatch(createuser(payload)),
    submitSessionsData: payload => dispatch(ChangeSessionData(payload))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Register);