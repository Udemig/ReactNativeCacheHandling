import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/HomeScreens/ChatScreen';
import Profile from '../screens/HomeScreens/Profile';
import AddPost from '../screens/HomeScreens/AddPost';
import MyPosts from '../screens/HomeScreens/MyPosts';

const BottomNavigator = () => {
  const BottomStack = createBottomTabNavigator();

  return (
    <BottomStack.Navigator>
       <BottomStack.Screen options={{headerShown:false}} name="MyPosts" component={MyPosts} />
             <BottomStack.Screen options={{headerShown:false}} name="AddPost" component={AddPost} />
       <BottomStack.Screen options={{headerShown:false}} name="Profile" component={Profile} />
      <BottomStack.Screen name="ChatScreen" component={ChatScreen} />
     
    </BottomStack.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
