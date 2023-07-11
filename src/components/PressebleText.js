import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PressebleText = ({label,style}) => {
  return (
   <TouchableOpacity>
    <Text style={style}>{label}</Text>
   </TouchableOpacity>
  )
}

export default PressebleText

const styles = StyleSheet.create({})