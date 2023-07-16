import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/HomeScreens/ChatScreen';
import Profile from '../screens/StackScreens/ProfileStack';
import AddPost from '../screens/HomeScreens/AddPost';
import MyPosts from '../screens/HomeScreens/MyPosts';
import MyIcon from '../components/MyIcon';

const BottomNavigator = () => {
  const BottomStack = createBottomTabNavigator();

  return (
    <BottomStack.Navigator>
         <BottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MyIcon name="person" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
      <BottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'My Posts',
          tabBarIcon: ({color, size}) => (
            <MyIcon name="home" color={color} size={size} />
          ),
        }}
        name="MyPosts"
        component={MyPosts}
      />
      <BottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Add Post',
          tabBarIcon: ({color, size}) => (
            <MyIcon name="add" color={color} size={size} />
          ),
        }}
        name="AddPost"
        component={AddPost}
      />
   
    </BottomStack.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
