import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SpecialButton = ({label,labelStyle,onPress,style}) => {
  return (
 <TouchableOpacity onPress={onPress} style={[styles.buttonStyle,style]}>
 <Text style={styles.labelStyle}>{label}</Text>
 </TouchableOpacity>
  )
}

export default SpecialButton

const styles = StyleSheet.create({

    buttonStyle:{
        backgroundColor:'#458eff'
        ,
        paddingHorizontal:60,
        paddingVertical:7,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },

    labelStyle:{
        color:'white'
    }
})