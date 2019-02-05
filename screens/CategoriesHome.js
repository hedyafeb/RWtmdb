import React, {Component} from 'react';
import {TouchableOpacity ,View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window')

class CategoriesHome extends Component {
    static navigationOptions = () => ({
        title: 'RebelMovies'
    })

    state = {
        images: [{
            num: 1,
            category: 'Top Rated',
            path: 'TopRated',
            image: require(`../assets/TopRated.jpg`)
        }, {
            num: 2,
            category: 'Now Playing',
            path: 'NowPlaying',
            image: require(`../assets/NowPlaying.jpg`)
        }, {
            num: 3,
            category: 'Popular',
            path: 'Popular',
            image: require(`../assets/Popular.jpg`)
        }, {
            num: 4,
            category: 'Upcoming',
            path: 'Upcoming',
            image: require(`../assets/Upcoming.jpg`)
        }]
    }

    getCategory = (path) => {
        this.props.navigation.navigate(path)
    }

    render = () => {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.images}
                    numColumns={2}
                    renderItem={({item}) => 
                        <TouchableOpacity
                            onPress={() => {this.getCategory(item.path)}}
                            ><View style={styles.imageContainer}>
                                <Image
                                    style={styles.image}
                                    source={item.image}
                                />
                            </View> 
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242429',
        paddingTop: 5
    },
    textInput: {
        height: 50,
        fontSize: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    },
    text: {
        textAlign: 'center',
        margin: 10,
        color: '#F5EBE0',
        fontSize: 16
    },
    imageContainer: {
        width: win.width/2 - 10,
        height: 250,
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 5,
        backgroundColor: '#0C0409',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    image: {
        width: win.width/2 - 10,
        height: 210,
        borderRadius: 10
    }
})

export default CategoriesHome