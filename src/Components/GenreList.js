import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchAllGenres} from '../Actions/genres.action'

class GenreList extends Component {
    componentDidMount(){
        this.props.fetchGenres()
    }

    render() {
        console.log(this.props.genres)
        return (
            <div className="GenreList">
                Genres
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
        fetchGenres:() => dispatch(fetchAllGenres())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GenreList)
