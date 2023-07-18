import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../HomeScreens/SearchScreen'
import ProfileScreen from '../HomeScreens/ProfileScreen'

const SearchStack = () => {
    const SearchStack=createNativeStackNavigator()
  return (
  <SearchStack.Navigator>
    <SearchStack.Screen options={{headerShown:false}} name='SearchScreen' component={SearchScreen}/>
    <SearchStack.Screen options={{headerShown:false}}  name='ProfileScreen' component={ProfileScreen}/>
  </SearchStack.Navigator>
  )
}

export default SearchStack

const styles = StyleSheet.create({})