import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext} from 'react';
import MyTextInput from '../../components/MyTextInput';
import MyButton from '../../components/MyButton';
import {colors} from '../../utils/colors';
import firestore from '@react-native-firebase/firestore';
import {DataContext} from '../../context/context';
DataContext;
const AddPost = () => {
  const {userInfo} = useContext(DataContext);

  const [newPost, setNewPost] = useState({
    postTitle: '',
    postDescription: '',
    postPhoto: '',
    userName: '',
    userPhoto: '',
    postUserId:''
   
});



  const addPost = (waddPost, userId) => {
    firestore()
      .collection('Post')
      .doc(userId)
      .collection('UserPost')
      .add({ ...waddPost, postId: null, postLikes: 0 }) // Add 'postId' and 'postLikes' fields with initial values
      .then((docInfo) => {
     // console.log(docInfo.id)
{/* İleri Süreçte Yapacağımız İşlemlerde Document in id si lazım olacağı için id yi kaydetme işlemi yapıyoruzz*/}

  const postId=docInfo.id
 

   docInfo.update({postId}).then(()=>console.log('güncellendi')).catch((error)=>console.log(error))








      })
      .catch((error) => {
        console.error('Error adding post:', error);
      });
  };
  



  const onChangeText = (key, value) => {
    setNewPost({...newPost, [key]: value});
  };
  return (
    <View>
      <Text>Birşeyler Paylaş</Text>

      <View>
        <MyTextInput
          value={newPost.postTitle}
          placeholder={'Başlık'}
          onChangeText={text => onChangeText('postTitle', text)}
        />
        <MyTextInput
          value={newPost.postDescription}
          placeholder={'Açıklama'}
          onChangeText={text => onChangeText('postDescription', text)}
        />
        <MyTextInput
          value={newPost.postPhoto}
          placeholder={'Photo'}
          onChangeText={text => onChangeText('postPhoto', text)}
        />
      </View>

    <Button title='ekle' onPress={()=>addPost({...newPost,userPhoto:userInfo.photo,userName:userInfo.name,postUserId:userInfo.userID},userInfo.userID)} />
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({});
