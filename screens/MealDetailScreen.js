import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native'

import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MEALS } from '../data/dummy-data';
export const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meals => meals.id === mealId)

  return (
    <ScrollView>
      {/* {console.log(selectedMeal.imageUrl)} */}
      < ImageBackground source={{ uri: selectedMeal.imageUrl }} style={styles.image} >
        {/* <View style={styles.titleContiner}>
                            <Text style={styles.title}>azeem</Text>
                            </View> */}
      </ImageBackground>
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <Text>{selectedMeal.duration} min</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordibility.toUpperCase()}</Text>
      </View>
      <View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingItem) => {
          return (
            <Text key={ingItem} style={styles.ingredientsItem}>{ingItem}</Text>
          )
        })}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(steps => {
          return (
            <Text key={steps} style={styles.ingredientsItem}>{steps}</Text>
          )
        })}
      </View>
    </ScrollView>

  )
}
MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meals => meals.id === mealId)
  return {
    headerTitle: selectedMeal.title,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      {/* this is responsible for render star at header */}
      <Item title='Fav'
        iconName='ios-star'
        onPress={() => {
          // return alert('he')
        }}
      />

    </HeaderButtons>

  }
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  mealRow: {
    flexDirection: 'row',

  },
  mealDetail: {
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    padding: 8
  },
  ingredientsItem: {
    marginVertical: 10,
    // textAlign:'center',
    marginHorizontal: 10,
    borderWidth: 2,
    padding: 8,
    borderRadius: 2,
    borderColor: 'black',
    backgroundColor: '#FDE6FF'

  }
})
export default MealDetailScreen;