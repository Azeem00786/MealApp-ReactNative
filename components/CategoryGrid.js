import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
  } from 'react-native'
const CategoryGrid = (props) => {
    let TouchablCmp = TouchableOpacity;
    if(Platform.OS==='android' & Platform.Version >=21  ){
        TouchablCmp=TouchableNativeFeedback;
    }

  return (
  <View style={styles.gridItem}>
    <TouchablCmp
  style={{flex:1}}
    onPress={props.onSelect}
    
    >
    <View style={{...styles.container,...{backgroundColor:props.color}}}>

      <Text style={styles.title} numberOfLines={2}>{props.title}</Text>

    </View>
  </TouchablCmp>
  </View>
 
  )
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin:25,
        height: 150,
        elevation:5,
       borderRadius:10,
       overflow:Platform.OS==='android' && Platform.Version>=21
       ? 'hidden': 'visible'
      // overflow:'hidden'
      },
      container:{
        flex:1,
        borderRadius:10,
        // overflow:'visible',
        shadowColor:'black',
        shadowOpacity:.36,
        shadowOffset:{width:2, height:5},
        
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
      },
      title:{
        fontWeight: "bold",
        fontSize:16
      }
  })
export default CategoryGrid;