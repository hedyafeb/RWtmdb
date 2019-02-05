import axios from 'axios'

export const getDetail = (payload) => {
    return (dispatch) => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${payload}?api_key=850a799fb5a8326829ae1f635ccff9b6&language=en-US`,
            method: 'GET'
        })
        .then( response => {
            dispatch({type: 'SET_CURRENT_MOVIE', payload: response.data })
        })
        .catch( err => {
            console.log("error: ", err.response)
        })
    }
} 


export const getSimilar = (payload) => {
    return (dispatch) => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${payload}/similar?api_key=850a799fb5a8326829ae1f635ccff9b6&language=en-US`,
            method: 'GET'
        })
        .then( response => {
            dispatch({type: 'SET_SIMILAR', payload: response.data.results })
        })
        .catch( err => {
            console.log("error: ", err.response)
        })
    }
} 

export const getNowPlayingList = () => {
    return (dispatch) => {
        axios({
            url: `https://api.themoviedb.org/3/movie/now_playing?api_key=850a799fb5a8326829ae1f635ccff9b6&language=en-US&page=1`,
            method: 'GET'
        })
        .then( response => {
            dispatch({type: 'GET_NOW_PLAYING', payload: response.data.results })
            dispatch({type: 'SET_CURRENT_MOVIE', payload: response.data.results[0] })
        })
        .catch( err => {
            console.log("error: ", err.response)
        })
    }
}

export const getTopRatedList = () => {
    return (dispatch) => {
        axios({
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=850a799fb5a8326829ae1f635ccff9b6&language=en-US&page=1`,
            method: 'GET'
        })
        .then( response => {
            dispatch({type: 'GET_TOP_RATED', payload: response.data.results })
            dispatch({type: 'SET_CURRENT_MOVIE', payload: response.data.results[0] })
        })
        .catch( err => {
            console.log("error: ", err.response)
        })
    }
}

export const getPopularList = () => {
    return (dispatch) => {
        axios({
            url: `https://api.themoviedb.org/3/movie/popular?api_key=850a799fb5a8326829ae1f635ccff9b6&language=en-US&page=1`,
            method: 'GET'
        })
        .then( response => {
            dispatch({type: 'GET_POPULAR', payload: response.data.results })
            dispatch({type: 'SET_CURRENT_MOVIE', payload: response.data.results[0] })
        })
        .catch( err => {
            console.log("error: ", err.response)
        })
    }
}

export const getUpcomingList = () => {
    return (dispatch) => {
        axios({
            url: `https://api.themoviedb.org/3/movie/upcoming?api_key=850a799fb5a8326829ae1f635ccff9b6&language=en-US&page=1`,
            method: 'GET'
        })
        .then( response => {
            dispatch({type: 'GET_UPCOMING', payload: response.data.results })
            dispatch({type: 'SET_CURRENT_MOVIE', payload: response.data.results[0] })
        })
        .catch( err => {
            console.log("error: ", err.response)
        })
    }
}


export const getTrailers = (payload) => {
    return (dispatch) => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${payload}/videos?api_key=850a799fb5a8326829ae1f635ccff9b6&language=en-US`,
            method: 'GET'
        })
        .then( response => {
            dispatch({type: 'SET_CURRENT_TRAILERS', payload: response.data.results })
        })
        .catch( err => {
            console.log("error: ", err.response)
        })
    }
}

export const getCasts = (payload) => {
    return (dispatch) => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${payload}/credits?api_key=850a799fb5a8326829ae1f635ccff9b6&language=en-US`,
            method: 'GET'
        })
        .then( response => {
            dispatch({type: 'SET_CURRENT_CASTS', payload: response.data.cast })
        })
        .catch( err => {
            console.log("error: ", err.response)
        })
    }
}


export const setCurrentMovie = (payload) => {
    return {
        type: 'SET_CURRENT_MOVIE',
        payload: payload
    }
}