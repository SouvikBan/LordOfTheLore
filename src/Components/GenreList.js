import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchAllGenres} from '../Actions/genres.action'
import Papersheet from '../Commons/Papersheet'

class GenreList extends Component {
    componentDidMount(){
        this.props.fetchGenres()
    }
    
    render() {
        const {genres} = this.props
        return (
            <div className="GenreList">
                {genres.map( genre => 
                        <div className="Genres" key={genre.ID}>
                            <Papersheet text={{content:genre.gname}} />
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
        fetchGenres:() => dispatch(fetchAllGenres())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GenreList)
