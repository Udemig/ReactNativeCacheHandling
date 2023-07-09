import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DataContext} from '../context/context';
import BottomNavigator from './BottomNavigator';
import AuthNavigator from './AuthNavigator';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const RootNavigator = () => {
  const {avaibleUser, setAvaibleUser,setUserInfo} = useContext(DataContext);

  const getUser=async(userId)=>{
    const user = await firestore().collection('Users').doc(userId).get();

    setUserInfo(user._data)
  }

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user) {

getUser(auth().currentUser.uid)
      setAvaibleUser(true);
    } else {
      setAvaibleUser(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator>
      {/* Eğer Kayıtlı Kullanıcı Varsa Uygulama İçerisine Yönlendir */}

      {avaibleUser && (
        <RootStack.Screen
          options={{headerShown: false}}
          name="BottomNavigator"
          component={BottomNavigator}
        />
      )}

      {/* command +k + c yorum satırı açar  // command+k+u yorum satırı kapatır*/}

      {/* Eğer Kayıtlı Kullanıcı Yok İse Kayıt İşlemleri (Auth) tarafına yönlendir  */}

      {!avaibleUser && (
        <RootStack.Screen
          options={{headerShown: false}}
          name="AuthNavigator"
          component={AuthNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
