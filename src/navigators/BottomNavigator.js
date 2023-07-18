import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/HomeScreens/ChatScreen';
import Profile from '../screens/StackScreens/ProfileStack';
import AddPost from '../screens/HomeScreens/AddPost';
import MyPosts from '../screens/HomeScreens/MyPosts';
import MyIcon from '../components/MyIcon';
import { DataContext } from '../context/context';

const BottomNavigator = () => {
  const BottomStack = createBottomTabNavigator();
const {userInfo}=useContext(DataContext)
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
>{()=><Profile uid={userInfo?.userID}/>}</BottomStack.Screen>
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
