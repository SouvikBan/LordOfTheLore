import React, { Component } from 'react'
import {connect} from 'react-redux'
import Papersheet from '../Commons/Papersheet'
import { Link } from 'react-router-dom'
import {fetchquestions} from '../Actions/questions.action'
import {AddQuiz,DeleteQuiz} from '../Actions/genres.action'
import ButtonStyle from '../Commons/ButtonStyle'

class QuizList extends Component {
    constructor() {
        super();
        this.state={
            form:false,
            quiz:"",
            alt:0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange=this.handleNameChange.bind(this)
    }

    handleNameChange(event){
        this.setState({quiz:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
        var value,thisgenre
        console.log(this.props.genres)
        for ( var genre of this.props.genres){
            if(genre.gname===this.props.match.params.genrename){
                value=genre.ID
                thisgenre=genre
                break
            }
        }
        this.props.AddQuiz({"GenreID":value,"quizname":this.state.quiz},thisgenre)
        console.log({"GenreID":value,"quizname":this.state.quiz})
    }

    componentWillMount(){
        console.log(this.props.quizzes)
    }
    Createbuttonrender(bool){
        
        if(bool){
            return(
                <div onClick={()=>this.setState({form:true})}><ButtonStyle text={{content:"Create Quiz",color:"secondary"}}/></div>
            )
        }
        else
        {
            return(
                <div></div>
            )
        }
    }
    findGenre(){
        for ( var genre of this.props.genres){
            if(genre.gname===this.props.match.params.genrename){
                return genre
            }
        }
    }
    adminButtonsRender(bool,id,genre=this.findGenre()){
        if(bool){
            return(
                <div>
                    <div onClick={()=>this.props.DeleteQuiz(id,genre)}><ButtonStyle text={{content:"Delete Quiz",color:"secondary"}}/></div>
                </div>
            )
        }
        else
        {
            return(<div></div>)
        }
    }
    renderform(){
        if(this.state.form){
        return(<form onSubmit={this.handleSubmit}>
        <label htmlFor="quizname">Enter quizname</label>
        <input id="quizname" name="quizname" type="text"  value={this.state.quiz} onChange={this.handleNameChange}/>
        <button>Create</button>
        </form>)
        }
        else
        {
            return(<div></div>)
        }
    }
    render() {
        const {quizzes,match} = this.props
        return (
            <div className="QuizList">
            {this.Createbuttonrender(this.props.Sessions.admin)}
                {this.renderform(this.state.form)}
                {
                    quizzes.map(quiz => 
                        <div className="Quizzes" key={quiz.ID}>
                            <Link to={`${match.url}/${quiz.ID}`} onClick={()=>this.props.submitQuizID(quiz.ID)}>
                                <Papersheet text={{content:quiz.quizname}} />
                            </Link>
                            {this.adminButtonsRender(this.props.Sessions.admin,quiz.ID)}
                        </div>    
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        quizzes:state.Quizzes,
        Sessions:state.Sessions,
        genres:state.Genres.allGenres
        
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        submitQuizID: payload => dispatch(fetchquestions(payload)),
        AddQuiz : payload => dispatch(AddQuiz(payload)),
        DeleteQuiz : payload => dispatch(DeleteQuiz(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuizList)
