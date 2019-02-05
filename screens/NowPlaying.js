import React, {Component} from 'react';
import {View, ScrollView, Image, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import MovieDetailInCategory from './MovieDetailInCategory'
import { getNowPlayingList, setCurrentMovie } from '../actions/movies'
import { connect } from 'react-redux'

class NowPlaying extends Component {
    static navigationOptions = {
        title: 'Now Playing',
    };

    componentDidMount() {
        setTimeout(this.props.getNowPlayingList, 1000)
    }

    onPress = (movie) => {
        this.props.setCurrentMovie(movie)
    }

    render() {
        if (this.props.nowPlaying.length !== 0) {
            return (
                <ScrollView style={styles.container}>
                    <FlatList
                        horizontal
                        data={this.props.nowPlaying}
                        renderItem={ ({item}) => {
                            return (
                                <TouchableOpacity 
                                    onPress={() => this.onPress(item)} 
                                >
                                    <View>
                                        <Image
                                            style={styles.image}
                                            source={{uri: `http://image.tmdb.org/t/p/w185/${item.poster_path}`}}
                                            />
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                    <MovieDetailInCategory movie={this.props.currentMovie} navigation={this.props.navigation}></MovieDetailInCategory>
                </ScrollView>
            )
        }
        return (
            <View style={styles.containerLoading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242429'
    },
    image: {
        height: 200,
        width: 200,
        marginHorizontal: 5,
        marginVertical: 10
    },
    nowPlaying: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center'
    }
})


const mapStateToProps = (state) => {
    return {
        currentMovie: state.movies.currentMovie,
        nowPlaying: state.movies.nowPlaying
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNowPlayingList: () => { dispatch(getNowPlayingList())},
        setCurrentMovie: (payload) => { dispatch(setCurrentMovie(payload))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying)