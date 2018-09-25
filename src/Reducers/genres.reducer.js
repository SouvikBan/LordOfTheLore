export default function(
    state = { 
    allGenres:[]
    }, action) {
    switch(action.type) {
        case 'FETCH_ALL_GENRES':
            return { allGenres:action.payload };
        default:
            return state;
    }
}