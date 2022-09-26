import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
    <Text>
    ProfileScreen!
    </Text>
</View>
  )
}
const styles = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'center',
  alignItems:'center',
  
  
  }
})
export default ProfileScreen;

