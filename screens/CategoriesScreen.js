import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native'
// import createDrawerNavigator from 'react-navigation-stack'
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
// import { color } from 'react-native-reanimated';
import CATEGORIES from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';

const CategoriesScreen = (props) => {
// console.log(CATEGORIES)
  // const Item = ({ title }) => (

  //     <View style={{
  //       height: 150,
  //       alignItems: 'center',
  //       justifyContent: 'center'
  //     }}>
  //       <Text>{title}</Text>

  //     </View>

  // );
  // const renderGridItem = ({ item }) => (
  //   <View style={{
  //     flex: 1,
  //     margin: 25,
  //     backgroundColor: item.color,
  //     borderRadius: 3
  //   }}

  //   >
  //     <TouchableOpacity onPress={() => { 
  //       props.navigation.navigate({ 
  //         routeName: 'categoryMeals', params:{
  //           categoryId:item.id
  //         }
  //        }) 
  //         }
  //         }>

  //     <Item title={item.title} />

  //     </TouchableOpacity>
  //   </View>
  // );
  const renderGridItem = (itemData) => {
    return (<CategoryGrid
     title={itemData.item.title}
    color={itemData.item.color}
     onSelect={()=>{
      props.navigation.navigate({
        routeName: 'categoryMeals', params: {
          categoryId: itemData.item.id
        }
      })
    }}/>)
  }
  // console.log(prpos)
  return (


    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />

  )
}
CategoriesScreen.navigationOptions = navData => {
  return{
  headerTitle: 'Meal Categories',
  headerLeft:<HeaderButtons HeaderButtonComponent={HeaderButton}>
      {/* this is responsible for render star at header */}
          <Item title='Fav' 
          iconName='ios-menu'
         
          onPress={()=>{
            // return alert('he')
            // navData.navigation.toggleDrawer()
          }}
          />
          
    </HeaderButtons> }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom:20
  },
  gridItem: {
    flex: 1,
    // marginTop:20,
    // marginLeft: 50,
    margin:25,
    height: 150,
    borderRadius: 4,
   
    borderRadius:5
  }
})
export default CategoriesScreen;