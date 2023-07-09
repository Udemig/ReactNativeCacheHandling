import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MyLowImage = () => {
  return (
    <Image
      style={styles.image}
      source={{uri: 'https://unsplash.it/400/400?image=1'}}
    />
  );
};

export default MyLowImage;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
