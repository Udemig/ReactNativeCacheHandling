import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import PressebleIcon from './PressebleIcon';

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <PressebleIcon name={'search-outline'} size={15} />
      <TextInput placeholder="Aramak İstediğniz Kullanıcı" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#FAF3F0',
    padding: 20,
    borderRadius: 30,
    flex: 1,
  },
});
