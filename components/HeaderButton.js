import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import {HeaderButton}from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
 
const CustomHeaderButton = (props) => {
  return (
    <HeaderButton IconComponent={Ionicons} iconSize={25} {...props} 
    color={Platform.OS==='android'?'white':'red'}
    />
  )
}
export default CustomHeaderButton;
