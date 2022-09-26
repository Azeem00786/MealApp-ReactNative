import React from 'react'
import {View, Text, StyleSheet,Switch} from 'react-native'
export const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
    <Text>
    FiltersScreen
    </Text>
    <Switch
        
      />
</View>
  )
}
FiltersScreen.navigationOptions={
  headerTitle:'Your Filter Screen'
}
const styles = StyleSheet.create({
  screen:{
    flexDirection:'row',
    flex:1,
    justifyContent:'center',
  alignItems:'center'
  }
})
export default FiltersScreen;