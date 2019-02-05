import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class MovieDetailInCategory extends Component {
    toDetail = (movieID) => {
        this.props.navigation.navigate('MovieDetail', {
            movieID: movieID 
        })
    }

    render() {
        return (
            <View>
                {this.props.movie.id && 
                    <TouchableOpacity onPress={() => this.toDetail(this.props.movie.id)}>
                        <View style={styles.container}>
                            <Text style={styles.title}>{this.props.movie.original_title}</Text>
                            <Text style={styles.textBody}>Release Date: {this.props.movie.release_date}</Text>
                            <Text style={styles.textBody}>{this.props.movie.overview}</Text>
                            <Text style={styles.subTitle}>Read more...</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10,
        color: '#F5EBE0'
    },
    subTitle: {
        fontWeight: 'bold',
        color: '#F5EBE0'
    },
    textBody: {
        marginTop: 10,
        marginBottom: 10,
        color: '#F5EBE0'
    },
    container: {
        margin: 10
    },
    image: {
        width: 150,
        height: 200
    }
})

export default MovieDetailInCategory