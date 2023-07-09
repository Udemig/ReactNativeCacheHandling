import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { create } from 'react-test-renderer'
import ProfileScreen from './ProfileScreen'
import SettingsScreen from './SettingsScreen'

function Profile() {

const ProfileStack=createNativeStackNavigator()

  return (
<ProfileStack.Navigator>
    <ProfileStack.Screen options={{headerShown:false}} name='ProfileScreen' component={ProfileScreen}/>

    <ProfileStack.Screen name='SettingsScreen' component={SettingsScreen}/>
</ProfileStack.Navigator>
  )
}

export default Profile