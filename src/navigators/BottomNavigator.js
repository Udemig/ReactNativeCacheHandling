import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/HomeScreens/ChatScreen';
import SettingsScreen from '../screens/HomeScreens/SettingsScreen';
import ProfileScreen from '../screens/HomeScreens/ProfileScreen';
import Profile from '../screens/HomeScreens/Profile';

const BottomNavigator = () => {
  const BottomStack = createBottomTabNavigator();

  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name="ChatScreen" component={ChatScreen} />
      <BottomStack.Screen options={{headerShown:false}} name="Profile" component={Profile} />
    </BottomStack.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
