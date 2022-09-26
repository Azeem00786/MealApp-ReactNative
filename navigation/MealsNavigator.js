// import {createStackNavigator} from 'react-navigation';
import React from 'react';
import { createStackNavigator} from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen'
import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoriteScreen from '../screens/FavoriteScreen'
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';
import FiltersScreen from '../screens/FiltersScreen';
// import ShareScreen from '../screens/ShareScreen';
const defaultNavOption = {
    headerStyle: {
        backgroundColor: '#800080'
    },
    headerTintColor: 'white',
    headerTitle: 'A screen'
}
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },

    categoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
},

    {
        // initialRouteName help to redirect on initial screen
        // initialRouteName:'MealDetail',

        // if you use modal property then your screen populate from bottom
        //  mode:'modal',
        defaultNavigationOptions: defaultNavOption
    }
)
const FilterNavigator = createStackNavigator({
    
    filter:FiltersScreen
})
const FavNavigator = createStackNavigator({
    Favourites: FavoriteScreen,
    MealDetail: MealDetailScreen,
    
},
    {
        defaultNavigationOptions: defaultNavOption
    })
    
const tabScreenConfig = {
    meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
                )
            },
            tabBarColor: '#000'
        }
    },
    favourite: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
                )
            },
            tabBarColor: '#000'
        }
    },
    filter: {
        screen: FilterNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-funnel' size={25} color={tabInfo.tintColor} />
                )
            },
            tabBarColor: '#000'
        }
    },

    // Profile:{screen:ProfileScreen,navigationOptions:{
    //     tabBarIcon:(tabInfo)=>{
    //         return <Ionicons name='ios-reader' size={25} color={tabInfo.tintColor}/>
    //     }
    // }},
}
const mealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: '#000',
        shifting: true
    }) :
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: '#cd077d',
        }
    })
    // const FilterNavigator = createAppContainer({
    //     Filter:FiltersScreen
    // })
    // const mainNavigator =createDrawerNavigator({
       
    //     Filters:FilterNavigator
    // })
export default createAppContainer(mealsFavTabNavigator);
// export default createAppContainer(MealsNavigator); 