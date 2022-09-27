import React, { useEffect, useCallback } from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
const FilterSwitch = props => {
  return (
    <View style={styles.screen}>
      <Text>
        {props.lavel}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={Platform.OS==='android' ? "blue" :'green'}
        thumbColor={props.state ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={props.onChange}
        value={props.state}
      />
    </View>
  )
}
export const FiltersScreen = (props) => {
  
  const { navigation } = props;
  const [isGluteenFree, setisGluteenFree] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isLactosFree, setisLactosFree] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);
  const saveFilter = useCallback(() => {
    //console.log('cal filter func')
    const appliedFilter = {
      isGluteenFree: isGluteenFree,
      isVegan: isVegan,
      isVegetarian: isVegetarian,
      isLactosFree: isLactosFree,
    }
    alert('your iten is save successfully!')
    //console.log('in func',appliedFilter)
  }, [isGluteenFree, isVegan, isVegetarian, isLactosFree])
  useEffect(() => {
    //console.log('call use effect')
    navigation.setParams({ save: saveFilter })
  }, [saveFilter])
  return (
    <View >
      <Text style={styles.title}>Available Filters!</Text>
      <FilterSwitch
        lavel='Gluteen-Free'
        state={isGluteenFree}
        onChange={newValue => setisGluteenFree(newValue)}
      />
      <FilterSwitch
        lavel='Vegan'
        state={isVegan}
        onChange={newValue => setisVegan(newValue)}
      />
      <FilterSwitch
        lavel='Vegetarian'
        state={isVegetarian}
        onChange={newValue => setisVegetarian(newValue)}
      />
      <FilterSwitch
        lavel='LactosFree'
        state={isLactosFree}
        onChange={newValue => setisLactosFree(newValue)}
      />
    </View>
  )
}
FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Screen',
    headerLeft: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      {/* this is responsible for render star at header */}
      <Item title='Fav'
        iconName='ios-menu'
        onPress={() => {
          // return alert('he')
        }}
      />
    </HeaderButtons>),
    headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      {/* this is responsible for render star at header */}
      <Item title='Fav'
        iconName='ios-save'
        onPress={navData.navigation.getParam('save')}
      />

    </HeaderButtons>)
  }
}
const styles = StyleSheet.create({
  title: {
    paddingTop: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "600"
  },
  screen: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
export default FiltersScreen;