import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyIcon from './MyIcon';
import MyFastImage from './MyFastImage';
import PressebleText from './PressebleText';
import {colors} from '../utils/colors';
import PressebleIcon from './PressebleIcon';

const PostCard = ({post}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topLeftSide}>
          <MyFastImage image={post.userPhoto} style={styles.profileImage} />
          <PressebleText label={post.userName} />
        </View>
        <PressebleIcon
          style={styles.topIcon}
          name={'ellipsis-vertical'}
          size={23}
        />
      </View>

      <View style={styles.imageContainer}>
        <MyFastImage image={post.postPhoto} style={styles.postImage} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.iconsContainer}>
          <View style={styles.leftSide}>
            <PressebleIcon name={'heart-outline'} size={25} />
            <PressebleIcon name={'chatbubble-outline'} size={25} />
            <PressebleIcon name={'paper-plane-outline'} size={25} />
          </View>

          <View style={styles.rightSide}>
            <PressebleIcon name={'bookmark-outline'} size={25} />
          </View>
        </View>

        <View style={styles.textContainer}>
          <PressebleText style={styles.boldText} label={'100 Likes'} />
          <View style={styles.postDescriptionContainer}>
            <PressebleText style={styles.boldText} label={post.userName} />
            <Text>{post.postDescription}</Text>
          </View>
          <PressebleText style={styles.lightText} label={'Yorum Ekle'} />
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 7,
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },

  topLeftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  topIcon: {
    transform: [{rotate: '90deg'}],
  },

  postImage: {
    width: '100%',
    height: 300,
    objectFit: 'contain',
  },

  bottomContainer: {
    paddingHorizontal: 8,
    paddingVertical: 7,
    gap: 8,
  },

  postDescriptionContainer:{

    flexDirection:'row',
    gap:5
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftSide: {
    flexDirection: 'row',
    gap: 5,
  },

  textContainer: {
    gap: 2,
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  lightText: {
    color: colors.lightTextColor,
  },
});
