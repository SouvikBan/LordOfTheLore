import React, { Component } from 'react'
import {connect} from 'react-redux'
import Papersheet from '../Commons/Papersheet'
import { Link } from 'react-router-dom'

class QuizList extends Component {
    componentWillMount(){
        console.log(this.props.quizzes)
    }
    render() {
        const {quizzes,match} = this.props
        return (
            <div className="QuizList">
                {
                    quizzes.map(quiz => 
                        <div className="Quizzes" key={quiz.ID}>
                            <Link to={`${match.url}/${quiz.quizname}`}>
                                <Papersheet text={{content:quiz.quizname}} />
                            </Link>
                        </div>    
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        quizzes:state.Quizzes
    }
}
export default connect(mapStateToProps)(QuizList)
