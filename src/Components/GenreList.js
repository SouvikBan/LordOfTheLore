import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchAllGenres} from '../Actions/genres.action'
import {fetchQuizzes} from '../Actions/quizzes.action'
import Papersheet from '../Commons/Papersheet'
import {Link} from 'react-router-dom'

class GenreList extends Component {
    componentDidMount(){
        this.props.fetchGenres()
    }
    
    render() {
        const {genres,match} = this.props
        return (
            <div className="GenreList">
                {genres.map( genre => 
                        <div className="Genres" key={genre.ID}>
                            <Link to={`${match.url}/${genre.gname}`} onClick={()=>this.props.submitGenre(genre)}>
                                <Papersheet text={{content:genre.gname}} />
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
        genres:state.Genres.allGenres
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchGenres:() => dispatch(fetchAllGenres()),
        submitGenre:payload => dispatch(fetchQuizzes(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GenreList)
