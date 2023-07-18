import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyIcon from './MyIcon';
import MyFastImage from './MyFastImage';
import PressebleText from './PressebleText';
import {colors} from '../utils/colors';
import PressebleIcon from './PressebleIcon';
import firestore from '@react-native-firebase/firestore';
const PostCard = ({post}) => {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(post.isLiked);

  //console.log(post);
//Burada postun kayıt edileceği yolu referans olarak belirliyoruz ve değişkene atyıoruz
useEffect(()=>{
  checkSavedPost()
},[])

const checkSavedPost=async()=>{

try{
  const userSavedPostRef=firestore().collection('SavedPosts').doc(post.postUserId).collection('UserSavedPost')

  const snapShot=await userSavedPostRef.doc(post.postId).get()
  const isPostSaved=snapShot.exists;
  setSaved(isPostSaved)
}

catch(error){
  console.log('fetch saved psot',error)

}

}






 const savePost=()=>{
  setSaved(!saved);



const userSavedPostRef=firestore().collection('SavedPosts').doc(post.postUserId).collection('UserSavedPost')


//Eğer Post Kayıtlı ise bastığımızda silecek
if(saved){

  //verdiğimiz referansda bulunan kayıtlı postlardan bastığımız  id ye ait olanı silecek
  userSavedPostRef.doc(post.postId).delete().then(()=>{
    console.log('Silindi')
  }).catch((err)=>console.log(err))


}

//Eğer Kayıtlı değilse verdiğmiz id ile kayıt edecek
else{
  userSavedPostRef.doc(post.postId).set(post).then(()=>{
    console.log('kayıt edildi')
  }).catch((err)=>console.log('kayıt edilirken hata',err))
}

 }

  const incrementPostLikes = (userId, postId) => {
    const postRef = firestore()
      .collection('Post')
      .doc(userId)
      .collection('UserPost')
      .doc(postId);

    if (liked) {
      postRef
        .update({postLikes: firestore.FieldValue.increment(-1), isLiked: false})
        .then(() => {
          console.log('like geri alındı');
          setLiked(false);
        }).catch((ee)=>console.log(ee));
    } else {
      postRef
        .update({
          postLikes: firestore.FieldValue.increment(1),
          isLiked: true,
        })
        .then(() => {
          console.log('like atıldı');
          setLiked(true);
        }).catch((ee)=>console.log(ee));
    }
  };

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
            <PressebleIcon
              onPress={() => incrementPostLikes(post.postUserId, post.postId)}
              name={liked ? 'heart' : 'heart-outline'}
              color={liked ? 'red' : 'black'}
              size={25}
            />
            <PressebleIcon name={'chatbubble-outline'} size={25} />
            <PressebleIcon name={'paper-plane-outline'} size={25} />
          </View>

          <View style={styles.rightSide}>
            <PressebleIcon
              onPress={() => savePost()}
              name={saved == true ? 'bookmark' : 'bookmark-outline'}
              size={25}
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <PressebleText style={styles.boldText} label={post.postLikes} />
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

  postDescriptionContainer: {
    flexDirection: 'row',
    gap: 5,
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
