import React, { Component } from 'react'
import { connect } from 'react-redux'
import ButtonStyle from '../Commons/ButtonStyle'
import axios from 'axios'
import {showscore} from '../Actions/quizzes.action'
import { Redirect } from 'react-router-dom'

class QuestionList extends Component {
    state = {
        redirect:false,
        questions:[]
    }

    calcScore(){
        var score=0
        for(var each of this.state.questions){
            console.log(each.options)
            var selected=each.options.filter(option => option.display===false)
            console.log(selected)
            var count=0
            if(selected.length===0){
                score+=0
            }
            else {
            if(selected.length===each.answer.length){
            for(var i in each.answer){
                if(each.answer[i]===selected[i].name)
                    count++
                }
            }
            if(count===each.answer.length)
            {
                if(each.qtype==='single-answer')
                    score+=2
                else
                    score+=5
            }
        }
    }
        this.props.ShowScore(score)
        this.setState({
            redirect:true
        })  
    }

    handleselection(question,value){
        console.log(this.state.questions)
     
      var questions = this.state.questions
      var index=0
      for(var i in questions){
        if(questions[i].question===question.question){
            index=i
            break
        }
      }
      console.log(index)
      for(var option of questions[index].options){
          if(value===option.name)
          {
              option.display=false
          }
      }
    
      this.setState({
          questions
      })

    }

    Createbuttonrender(bool){
        if(bool){
            return(
                <div><ButtonStyle text={{content:"Create Question",color:"secondary"}}/></div>
            )
        }
        else
        {
            return(
                <div></div>
            )
        }
    }
    adminButtonsRender(bool){
        if(bool){
            return(
                <div>
                    <div><ButtonStyle text={{content:"Edit Question",color:"secondary"}}/></div>
                    <div><ButtonStyle text={{content:"Delete Question",color:"secondary"}}/></div>
                </div>
            )
        }
        else
        {
            return(<div></div>)
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/api/questions/'+ this.props.match.params.id)
        .then(res => {
            for (var each of res.data){
            var obj={
                "ID":each.ID,
                "QuizID":each.QuizID,
                "qtype":each.qtype,
                "question":each.question,
                "options":[],
                "answer":each.answer.split(",")
            }
            var arr=each.options.split(",")
            for(var i of arr){
                var obj1={
                    "name":i,
                    "display":true
                }
                obj.options.push(obj1)
            }
            this.setState(prevState=>({
                questions: [...prevState.questions, obj]
              }))
        }
    })
}
    
    render() {
        const {match} =this.props
        if(this.state.redirect){
            return(<Redirect to={`${match.path}/score`}></Redirect>)
        }

        const {questions}=this.state
        if(!this.props.questions){
            return(<div></div>)
        }
        const buttonrenderer = (question) =>{
            return question.options.map((value,i) => {
                return(<div key={i} onClick={()=>this.handleselection(question,value.name)}>{(value.display)?<ButtonStyle text={{content:(i+1)+'. '+value.name,color:"primary"}}/>:<div key={i}></div>}</div>)
            })
        }
        return (
            <div className="QuestionList">
            {this.Createbuttonrender(this.props.Sessions.admin)}
            {questions.map( question => 
                    <div className="Questions" key={question.ID}>
                        <h4>{question.ID}.{question.question}</h4>
                        {buttonrenderer(question)}
                        {this.adminButtonsRender(this.props.Sessions.admin)} 
                    </div>
                )
            } 
            <hr />
            <div onClick={()=>this.calcScore()}><ButtonStyle text={{content:"End Quiz And Show Scores",color:"secondary"}}/></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        questions:state.Questions,
        Sessions:state.Sessions,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        ShowScore : payload => dispatch(showscore(payload))
    }
}   

export default connect(mapStateToProps,mapDispatchToProps)(QuestionList)
