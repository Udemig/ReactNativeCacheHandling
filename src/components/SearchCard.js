import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import MyFastImage from './MyFastImage';
import PressebleIcon from './PressebleIcon';

const SearchCard = ({uName,uSName,pPhoto,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainBox}>
      <View style={styles.leftSide}>
        <MyFastImage
          image={pPhoto}
          style={styles.image}
        />
        <View style={styles.userBar}>
          <Text>{uSName}</Text>
          <Text>{uName}</Text>
        </View>
      </View>

      <PressebleIcon
        style={{position: 'absolute', right: 5, top: 7}}
        name={'close'}
        size={18}
      />
    </TouchableOpacity>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  mainBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    position: 'relative',
  },

  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  image: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#fb3958',
    objectFit: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
