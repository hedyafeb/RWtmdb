import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome'
import NowPlaying from '../screens/NowPlaying'
import TopRated from '../screens/TopRated'
import MovieDetail from '../screens/MovieDetail'
import Popular from '../screens/Popular'
import Upcoming from '../screens/Upcoming'
import CategoriesHome from '../screens/CategoriesHome'


const CategoriesNavigator = createStackNavigator(
    {
        CategoriesHome,
        NowPlaying,
        TopRated,
        Popular,
        Upcoming,
        MovieDetail
    }, {
        initialRouteName: "CategoriesHome"
    }
)

const AppNavigator = createBottomTabNavigator({
    Categories: { 
        screen: CategoriesNavigator,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="film"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
});

  
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer