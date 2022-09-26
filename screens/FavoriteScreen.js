import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
export const FavoriteScreen = (props) => {
const favMeals = MEALS.filter(meals=> meals.id==='m1' || meals.id==='m2')  
  return (
    <MealList listData={favMeals} navigation={props.navigation}/>

  )
}
FavoriteScreen.navigationOptions={
  headerTitle:'Your Favourite'
}
const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
  alignItems:'center',
  
  
  }
})
export default FavoriteScreen;

