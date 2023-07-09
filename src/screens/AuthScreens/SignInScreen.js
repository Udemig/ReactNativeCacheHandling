import {StyleSheet, Text, View} from 'react-native';
import {TextInput, Button, Subheading} from 'react-native-paper';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const SignInScreen = () => {
  const navigation = useNavigation();

  const [newUser, setNewUser] = useState({
    
    email: '',
    password: '',
   
  });

  const onChangeText = (key, value) => {
    setNewUser({...newUser, [key]: value});
  };


const[error,setError]=useState('')





  const handleSignIn = ()=> {

    auth()
    .signInWithEmailAndPassword(newUser.email, newUser.password)
    .then(() => {
      console.log('User account created & signed in!');
  
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
console.log(error)
  return (
    <View style={styles.mainContainer}>

{!!error&&(
  <Subheading
  style={styles.errorMessage}
  >{error}</Subheading>
)}


   

      <TextInput
        label={'Email'}
        onChangeText={text => onChangeText('email', text)}
        value={newUser.email}
      />



      <TextInput
        label={'Şifre'}
        onChangeText={text => onChangeText('password', text)}
        secureTextEntry
      />

 

      <View style={styles.btnContainer}>
        <Button mode="contained" onPress={() => handleSignIn()}>
          Giriş Yap
        </Button>

        <Button onPress={() => navigation.navigate('SignUpScreen')}  compact>
          Kayıt Ol
        </Button>
      </View>
    </View>
  );
};

export default SignInScreen;

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
