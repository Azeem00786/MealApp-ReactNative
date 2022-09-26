import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  // console.log('hell')
  // console.log(CATEGORIES)
  
  
    // console.log(itemData.item.duration)
    
      
  const catId = props.navigation.getParam('categoryId')
  // const selectedCategory = CATEGORIES.find(cat=>cat.id === catId)
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
  
  return <MealList listData={displayedMeals} navigation={props.navigation}/>
}
    
CategoryMealsScreen.navigationOptions = navigateData => {
  const catId = navigateData.navigation.getParam('categoryId')
  const selected = CATEGORIES.find(cat => cat.id === catId)
  return {
    headerTitle: selected.title,
  }

}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default CategoryMealsScreen;