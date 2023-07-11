import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MyIcon from './MyIcon';
import { colors } from '../utils/colors';

const InfoCart = ({label, labelValue, cartIcon}) => {
  return (
    <View style={styles.infoCart}>
  <MyIcon  name={cartIcon} style={styles.iconBox} size={40}  color={colors.primaryColor}/>
      <View style={styles.infoBox}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.labelValue}>{labelValue}</Text>
      </View>
    </View>
  );
};

export default InfoCart;

const styles = StyleSheet.create({

    infoCart:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingVertical:15,
        paddingHorizontal:20,
        height:100,
        paddingRight:5
    },

    iconBox:{

        borderWidth:2,
        width:70,
        height:70,
        borderRadius:35,
        alignItems:'center',
        justifyContent:'center',
        borderColor:colors.primaryColor,
        
    },
    infoBox:{
        
        marginLeft:50,
        paddingBottom:10,
        
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:'gray'
    },
    label:{
        color:colors.primaryColor,
        fontSize:20,
        marginBottom:10
    },
    labelValue:{
        fontSize:20
    }


});
