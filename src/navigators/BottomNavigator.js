import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/HomeScreens/ChatScreen';
import Profile from '../screens/StackScreens/ProfileStack';
import AddPost from '../screens/HomeScreens/AddPost';
import Feed from '../screens/HomeScreens/Feed';
import MyIcon from '../components/MyIcon';
import {DataContext} from '../context/context';
import SearchScreen from '../screens/HomeScreens/SearchScreen';
import SearchStack from '../screens/StackScreens/SearchStack';

const BottomNavigator = () => {
  const BottomStack = createBottomTabNavigator();
  const {userInfo} = useContext(DataContext);
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, size}) => (
            <MyIcon name="home" color={color} size={size} />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <BottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <MyIcon name="search-outline" color={color} size={size} />
          ),
        }}
        name="SearchScreen"
        component={SearchStack}
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
      <BottomStack.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MyIcon name="person" color={color} size={size} />
          ),
        }}
        name="Profile">
        {() => <Profile uid={userInfo?.userID} />}
      </BottomStack.Screen>
    </BottomStack.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
