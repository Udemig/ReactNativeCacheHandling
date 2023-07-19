import {StyleSheet, Text, View,ScrollView} from 'react-native';
import {TextInput, Button, Subheading} from 'react-native-paper';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import MyIcon from '../../components/MyIcon';
import SpecialInput from '../../components/SpecialInput';
import SpecialButton from '../../components/SpecialButton';
import PressebleText from '../../components/PressebleText';
import { Fonts } from '../../utils/Fonts';
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
  <View style={{flex: 1, backgroundColor: 'white'}}>
    {!!error && <Subheading style={styles.errorMessage}>{error}</Subheading>}
    <ScrollView>
      <Text style={styles.language}>
        English(United States)
        <MyIcon name={'chevron-down-outline'} />
      </Text>
      <View style={styles.mainContainer}>
        <Text style={styles.logo}>Instagram</Text>
 

        <SpecialInput
          placeholder={'Email'}
          onChangeText={text => onChangeText('email', text)}
          value={newUser.email}
        />

      



        <SpecialInput
          placeholder={'Şifre'}
          onChangeText={text => onChangeText('password', text)}
          secureTextEntry
        />

       

        <View style={styles.btnContainer}>
          <SpecialButton
            style={styles.button}
            onPress={() => handleSignIn()}
            label={' Giriş Yap'}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Text>Hala Hesabın Yok Mu ? </Text>
        <PressebleText
          onPress={() => navigation.navigate('SignUpScreen')}
          label={'Şimdi Kaydol'}
          style={styles.ptext}
        />
      </View>
    </ScrollView>
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

logo: {
  fontWeight: '400',
  fontFamily: Fonts.regular,
  fontSize: 50,
  textAlign: 'center',
  marginTop: 50,
  marginBottom: 80,
},
button: {
  width: '100%',
  paddingVertical: 20,
},

language: {
  flexDirection: 'row',
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'gray',
  gap: 5,
  marginTop: 15,
},

bottomContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 330,
  borderTopWidth: 0.5,
  borderTopColor: 'gray',
  paddingTop: 20,
},

ptext: {
  fontWeight: 'bold',
  fontSize: 15,
},

});
