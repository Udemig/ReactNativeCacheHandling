import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from'react-native-vector-icons/Ionicons'

const MyIcon = ({style,name,size,color}) => {
  return (
    <View style={style}>
          <Icon name={name} size={size} color={color} />
        </View>
  )
}

export default MyIcon

const styles = StyleSheet.create({})