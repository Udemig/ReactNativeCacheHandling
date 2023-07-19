import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpScreen from '../screens/AuthScreens/SignUpScreen'
import SignInScreen from '../screens/AuthScreens/SignInScreen'

const AuthNavigator = () => {
const AuthStack=createNativeStackNavigator()


  return (
   <AuthStack.Navigator>
    <AuthStack.Screen options={{headerShown:false}} name='SignUpScreen' component={SignUpScreen} />
    <AuthStack.Screen options={{headerShown:false}} name='SignInScreen' component={SignInScreen}/>
   </AuthStack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})