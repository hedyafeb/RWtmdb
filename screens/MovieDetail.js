import React, { Component } from 'react'
import { View, Text, Image, FlatList, StyleSheet, ScrollView, Linking, WebView, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDetail, getTrailers, getCasts, getSimilar } from '../actions/movies'

const win = Dimensions.get('window')

class MovieDetail extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        const movieID = navigation.getParam('movieID', 'NO-ID');
        this.props.getDetail(movieID)
        this.props.getTrailers(movieID)
        this.props.getCasts(movieID) 
        this.props.getSimilar(movieID)
    }

    toDetail = (movieID) => {
        this.props.navigation.push('MovieDetail', {
            movieID: movieID 
        })
    }

    render() {
        let movie = this.props.currentMovie
        let allGenre = []
        if (movie.genres) {
            movie.genres.forEach( genre => {
                allGenre.push(genre.name)
            })
        }

        return (
            <ScrollView style={styles.container}>
                {this.props.currentTrailers.length > 0 && 
                    <WebView
                        source={{uri: `https://www.youtube.com/embed/${this.props.currentTrailers[0].key}`}}
                        style={{marginTop: 0, width: win.width, height: 200}}
                    />
                }
                <View style={styles.descContainer}>
                    <Text style={styles.title}>{movie.original_title}</Text>
                    <Text style={styles.textBody}>
                        <Text style={styles.textBodyBold}>Runtime: </Text> {movie.runtime} {"\n"}
                        <Text style={styles.textBodyBold}>Release Date: </Text> {movie.release_date} {"\n"}
                        <Text style={styles.textBodyBold}>Genre: </Text> {allGenre.join(', ')} {"\n"}
                        <Text style={styles.textBodyBold}>Homepage: {}
                            <Text
                                style={{color: 'green'}}
                                onPress={() => Linking.openURL(`${movie.homepage}`)}>
                                {movie.homepage}
                            </Text>
                        </Text> {"\n"}
                        <Text style={styles.textBodyBold}>Synopsis: </Text> {movie.overview} {"\n"}
                    </Text>
                    <Text style={styles.textBodyBold}>Casts: </Text>
                </View>
                <FlatList 
                    horizontal
                    data={this.props.currentCasts}
                    renderItem={ ({item}) => {
                        return (
                            <View style={styles.castImage}>
                                <Image 
                                    style={{width: 60, height: 80}}
                                    source={{uri: `http://image.tmdb.org/t/p/w185/${item.profile_path}`}}
                                />
                                <Text style={{fontWeight: 'bold', ...styles.imageFont}}>{item.character}</Text>
                                <Text style={styles.imageFont}>{item.name}</Text>
                            </View>
                        )
                    }}
                />
                <Text style={{marginTop: 10, marginLeft: 10, ...styles.textBodyBold}}>Similar Movies: </Text>
                <FlatList 
                    horizontal
                    data={this.props.currentSimilar}
                    renderItem={ ({item}) => {
                        return (
                            <TouchableOpacity style={styles.castImage} onPress={() => this.toDetail(item.id)}> 
                                <Image 
                                    style={{width: 200, height: 200, marginHorizontal: 5, marginVertical: 10}}
                                    source={{uri: `http://image.tmdb.org/t/p/w185/${item.poster_path}`}}
                                />
                                <Text style={{fontWeight: 'bold', ...styles.imageFont}}>{item.original_title}</Text>
                            </TouchableOpacity>

                        )
                    }}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242429'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: '#F5EBE0'
    },
    textBody: {
        marginTop: 10,
        marginBottom: 10,
        color: '#F5EBE0'
    },
    textBodyBold: {
        fontWeight: 'bold',
        color: '#F5EBE0'
    },
    descContainer: {
        marginHorizontal: 10,
    },
    imageFont: {
        fontSize: 10,
        width: 100,
        textAlign: 'center',
        color: '#F5EBE0'
    },
    castImage: {
        alignItems: 'center',
    },
    image: {
        width: win.width,
        height: 400
    }
})


const mapStateToProps = (state) => {
    return {
        currentMovie: state.movies.currentMovie,
        currentTrailers: state.movies.currentTrailers,
        currentCasts: state.movies.currentCasts,
        currentSimilar: state.movies.currentSimilar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: (payload) => { dispatch(getDetail(payload))},
        getTrailers: (payload) => { dispatch(getTrailers(payload))},
        getCasts: (payload) => { dispatch(getCasts(payload))},
        getSimilar: (payload) => { dispatch(getSimilar(payload))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)