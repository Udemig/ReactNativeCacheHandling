import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from'react-native-vector-icons/Ionicons'

const PressebleIcon = ({style,name,size,color,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
          <Icon name={name} size={size} color={color} />
        </TouchableOpacity>
  )
}

export default PressebleIcon

const styles = StyleSheet.create({})