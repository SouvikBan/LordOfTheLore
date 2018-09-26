import React, { Component } from 'react'
import { connect } from 'react-redux'
import ButtonStyle from '../Commons/ButtonStyle'
import {Link} from 'react-router-dom'

class QuestionList extends Component {
    state = {
        score: 0,
        optionShow:true
    }

    handleselection(type,value,answer){
        var arr=answer.split(",")
        for(var element of arr){
            if(element.trim()===value.trim()){
                if(type=='single-answer'){
                   // this.state.score += 2
                }
                else
                {
                    //this.state.score +=1
                }
            }
        }
    }

    Createbuttonrender(bool){
        if(bool){
            return(
                <div><button>Create Question</button></div>
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
                    <button>Edit Question/Options</button>
                    <button>Delete Question/Options</button>
                </div>
            )
        }
        else
        {
            return(<div></div>)
        }
    }
    
    render() {

        const {questions}=this.props
        if(!this.props.questions){
            return(<div></div>)
        }
        const buttonrenderer = (type,str,answer) =>{
            var arr = str.split(",");
            return arr.map((value,i) => {
                return(<div key={i}><button onClick={()=>this.handleselection(type,value,answer)}>{value}</button></div>)
            })
        }
        return (
            <div className="QuestionList">
            <div>Score:{this.state.score}</div>
            {this.Createbuttonrender(this.props.Sessions.admin)}
            {questions.map( question => 
                <div>
                    <div className="Questions" key={question.ID}>
                        <h4>{question.ID}.{question.question}</h4>
                        {buttonrenderer(question.qtype,question.options,question.answer)}
                        {this.adminButtonsRender(this.props.Sessions.admin)} 
                    </div>
                </div>
                )
            } 
            <hr />
            <Link to="/Profile/Leaderboards"> <ButtonStyle text={{content:"End Quiz And Show Scores",color:"secondary"}}/> </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        questions:state.Questions,
        Sessions:state.Sessions
    }
}

export default connect(mapStateToProps)(QuestionList)
