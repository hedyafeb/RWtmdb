const defaultState = {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
    currentMovie: {},
    currentTrailers: [],
    currentCasts: [],
    currentSimilar: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_NOW_PLAYING':
            return  {
                ...state,
                nowPlaying: action.payload
            }
        case 'GET_TOP_RATED':
            return  {
                ...state,
                topRated: action.payload
            }
        case 'GET_POPULAR':
            return  {
                ...state,
                popular: action.payload
            }
        case 'GET_UPCOMING':
            return  {
                ...state,
                upcoming: action.payload
            }
        case 'SET_CURRENT_MOVIE':
            return  {
                ...state,
                currentMovie: action.payload
            }
        case 'SET_CURRENT_TRAILERS':
            return  {
                ...state,
                currentTrailers: action.payload
            }
        case 'SET_CURRENT_CASTS':
            return  {
                ...state,
                currentCasts: action.payload
            }
        case 'SET_SIMILAR':
            return  {
                ...state,
                currentSimilar: action.payload
            }
        default:
            return state
    }
}