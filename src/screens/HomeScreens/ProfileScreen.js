import { StyleSheet,  View } from 'react-native'
import React,{useContext} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import MyFastImage from '../../components/MyFastImage'
import MyLowImage from '../../components/MyLowImage'
import { DataContext } from '../../context/context'
import auth from '@react-native-firebase/auth'
import {Text} from 'react-native-paper'

const ProfileScreen = () => {
    const {avaibleUser, setAvaibleUser,setUserInfo,userInfo} = useContext(DataContext);
const navigation=useNavigation()

console.log(userInfo)

  return (
    <View>

<MyFastImage image={userInfo.photo}/>
<Text variant="displaySmall">{userInfo.name}</Text>
<Text variant="displaySmall">{userInfo.email}</Text>



      </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})