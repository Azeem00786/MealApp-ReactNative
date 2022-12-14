import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { useState } from 'react';
import MealsNavigator from './navigation/MealsNavigator';

import { enableScreens } from 'react-native-screens';
enableScreens();
const fetchFonts = ()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  console.log('hello')
  // useEffect(()=>{
  //   (async()=>await Font.loadAsync({
  //     'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
  //     'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  //   }),[])
  // })
  if(!fontLoaded){
    <AppLoading startAsynch={fetchFonts} onFinish={()=>setFontLoaded(true)}/>
  }
  return <MealsNavigator/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
