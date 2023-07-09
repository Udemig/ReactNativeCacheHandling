import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const MyFastImage = ({image}) => {
  return (
    <FastImage
    style={{ width: 200, height: 200 }}
    source={{
        uri: image,
        headers: { Authorization: 'someAuthToken' },
        priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
/>
  )
}

export default MyFastImage

const styles = StyleSheet.create({})