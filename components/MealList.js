import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem'
const MealList = (props) => {
    const renderedMealItem = itemData => {
        // console.log(itemData.item.duration)
        return (
          <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordibility={itemData.item.affordibility}
            imageUrl={itemData.item.imageUrl}
            onSelectMeal={()=>{
              props.navigation.navigate({
                routeName: 'MealDetail', params: {
                  mealId: itemData.item.id
                }
              })
            }} />
        )
      }
  return (
    <View style={styles.screen}>
        <FlatList data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderedMealItem}
        style={{ width: '100%' }}
      />
     
    </View>
  )
}
const styles =StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }
})
export default MealList;