import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

const MyTextInput = ({placeholder,onChangeText,value}) => {
  return (
    <TextInput
      placeholderTextColor={colors.textColor}
      placeholder={placeholder}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.secondaryColor,
    padding: 15,
    margin: 15,
    borderRadius: 12,
    shadowColor: "#10eaf9",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7
  },
});
