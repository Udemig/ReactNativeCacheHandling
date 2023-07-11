import {StyleSheet, Text, View} from 'react-native';
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
  });

  const onChangeText = (key, value) => {
    setNewPost({...newPost, [key]: value});
  };

  const addPost = (waddPost, userId) => {
    firestore()
      .collection('Post')
      .doc(userId)
      .collection('UserPost')
      .add(waddPost)
      .then(() => {
        console.log('Post added!');

        setNewPost({
          postTitle: '',
          postDescription: '',
          postPhoto: '',
        });
      });
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

      <MyButton
        title={'Paylaş'}
        iconName={'add-outline'}
        iconColor={colors.textColor}
        onPress={() =>
          addPost(
            {...newPost, userName: userInfo.name, userPhoto: userInfo.photo},
            userInfo.userID,
          )
        }
      />
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({});
