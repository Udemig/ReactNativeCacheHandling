import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PressebleIcon from './PressebleIcon'
import { Fonts } from '../utils/Fonts'

const Header = () => {
  return (
    <View style={styles.mainContainer}>
<View style={styles.logoBox}><Text style={styles.logo}>INSTAGRAM</Text></View>
<View style={styles.iconBox}>
<PressebleIcon name={'add-circle-outline'} size={25}/>
<PressebleIcon name={'heart-outline'} size={25}/>
<PressebleIcon name={'chatbubble-ellipses-outline'} size={25}/>


</View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    mainContainer:{
        flexDirection:'row'
        ,
        backgroundColor:'white',
        justifyContent:'space-between',
        paddingHorizontal:15,
        paddingVertical:18,
        alignItems:'center'
    },

    logo:{
        fontSize:25,
        fontWeight:'400',
        fontFamily:Fonts.regular,
        letterSpacing:1 
    },
    iconBox:{
        flexDirection:'row',
        gap:15
    }
})