import {StyleSheet, Text, View} from 'react-native';
import {TextInput, Button, Subheading} from 'react-native-paper';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import MyButton from '../../components/MyButton';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    job:'',
    bio:'',
    experience:'',
    userID:'',
    followingCount:0,
    followersCount:0,
    postCount:0
  });

  const onChangeText = (key, value) => {
    setNewUser({...newUser, [key]: value});
  };


const[error,setError]=useState('')


const saveUser=(newUse,userId)=>{

  firestore()
  .collection('Users')
  .doc(userId)
  .set(
  {...newUse,userID:userId}
  )
  .then(() => {
    console.log('User added!');
  });


}


  const handleSignUp = ()=> {

    auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(() => {
      console.log('User account created & signed in!');
      saveUser(newUser,auth().currentUser.uid)
    })
    .catch(err => {
      if (err.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        setError(err.message)
      }
  
      if (err.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        setError(err.message)

      }
  
      console.error(err);
      setError(err.message)
    });

  };

  return (
    <View style={styles.mainContainer}>

{!!error&&(
  <Subheading
  style={styles.errorMessage}
  >{error}</Subheading>
)}


      <TextInput
        label="Kullanıcı Adı"
        onChangeText={text => onChangeText('name', text)}
        value={newUser.name}
      />

      <TextInput
        label={'Email'}
        onChangeText={text => onChangeText('email', text)}
        value={newUser.email}
      />

<TextInput
        label={'Mesleğiniz'}
        onChangeText={text => onChangeText('job', text)}
        value={newUser.job}
      />

<TextInput
        label={'Tecrübe Yılı'}
        onChangeText={text => onChangeText('experience', text)}
        value={newUser.experience}
      />

<TextInput
        label={'Hakkında'}
        onChangeText={text => onChangeText('bio', text)}
        value={newUser.bio}
      />

      <TextInput
        label={'Şifre'}
        onChangeText={text => onChangeText('password', text)}
        secureTextEntry
      />

      <TextInput
        label={'Profil Fotoğrafı'}
        onChangeText={text => onChangeText('photo', text)}
      />

      <View style={styles.btnContainer}>
        <Button compact onPress={() => navigation.navigate('SignInScreen')}>
          Giriş Yap
        </Button>

<Button onPress={()=>handleSignUp(newUser)} mode='contained'>Kayıt Ol</Button>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({


  mainContainer:{
    padding:15,
    gap:10
  },

  errorMessage:{
color:'red',

  },
  btnContainer:{
    
    flexDirection:'row'
    ,
    justifyContent:'space-around'
    ,
    marginTop:15
  
},

});
