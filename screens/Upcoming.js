import React, {Component} from 'react';
import {ActivityIndicator, View, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MovieDetailInCategory from './MovieDetailInCategory'
import { getUpcomingList, setCurrentMovie } from '../actions/movies'
import { connect } from 'react-redux'

class Upcoming extends Component {
    static navigationOptions = {
        title: 'Upcoming',
    };

    componentDidMount() {
        setTimeout(this.props.getUpcomingList, 1000)
    }

    onPress = (movie) => {
        this.props.setCurrentMovie(movie)
    }

    render() {
        if (this.props.upcoming.length !== 0) {
            return (
                <ScrollView style={styles.container}>
                    <FlatList
                        horizontal
                        data={this.props.upcoming}
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
        upcoming: state.movies.upcoming
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUpcomingList: () => { dispatch(getUpcomingList())},
        setCurrentMovie: (payload) => { dispatch(setCurrentMovie(payload))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)