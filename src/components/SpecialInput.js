import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const SpecialInput = ({placeholder, onChangeText, value}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
    />
  );
};

export default SpecialInput;

const styles = StyleSheet.create({

input:{
    borderWidth:1,
    padding:15,
    borderRadius:4,
    backgroundColor:'#F5F5F5',
    borderColor:'gray'
}

});
