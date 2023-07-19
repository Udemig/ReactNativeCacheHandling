import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {TextInput, Button, Subheading} from 'react-native-paper';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import MyButton from '../../components/MyButton';
import SpecialButton from '../../components/SpecialButton';
import SpecialInput from '../../components/SpecialInput';
import {Fonts} from '../../utils/Fonts';
import PressebleText from '../../components/PressebleText';
import MyIcon from '../../components/MyIcon';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    job: '',
    bio: '',
    experience: '',
    userID: '',
    followingCount: 0,
    followersCount: 0,
    postCount: 0,
  });

  const onChangeText = (key, value) => {
    setNewUser({...newUser, [key]: value});
  };

  const [error, setError] = useState('');

  const saveUser = (newUse, userId) => {
    firestore()
      .collection('Users')
      .doc(userId)
      .set({...newUse, userID: userId})
      .then(() => {
        console.log('User added!');
      });
  };

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        console.log('User account created & signed in!');
        saveUser(newUser, auth().currentUser.uid);
      })
      .catch(err => {
        if (err.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          setError(err.message);
        }

        if (err.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          setError(err.message);
        }

        console.error(err);
        setError(err.message);
      });
  };

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
            placeholder="Telefon Numarası,Email veya Kullanıcı Adı"
            onChangeText={text => onChangeText('name', text)}
            value={newUser.name}
          />

          <SpecialInput
            placeholder={'Email'}
            onChangeText={text => onChangeText('email', text)}
            value={newUser.email}
          />

          <SpecialInput
            placeholder={'Mesleğiniz'}
            onChangeText={text => onChangeText('job', text)}
            value={newUser.job}
          />

          <SpecialInput
            placeholder={'Tecrübe Yılı'}
            onChangeText={text => onChangeText('experience', text)}
            value={newUser.experience}
          />

          <SpecialInput
            placeholder={'Hakkında'}
            onChangeText={text => onChangeText('bio', text)}
            value={newUser.bio}
          />

          <SpecialInput
            placeholder={'Şifre'}
            onChangeText={text => onChangeText('password', text)}
            secureTextEntry
          />

          <SpecialInput
            placeholder={'Profil Fotoğrafı'}
            onChangeText={text => onChangeText('photo', text)}
          />

          <View style={styles.btnContainer}>
            <SpecialButton
              style={styles.button}
              onPress={() => handleSignUp(newUser)}
              label={' Kayıt Ol'}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text>Zaten Hesasbın Var Mı ? </Text>
          <PressebleText
            onPress={() => navigation.navigate('SignInScreen')}
            label={'Giriş Yap'}
            style={styles.ptext}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    gap: 10,
    backgroundColor: 'white',
  },

  errorMessage: {
    color: 'red',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  logo: {
    fontWeight: '400',
    fontFamily: Fonts.regular,
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
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
    marginTop: 70,
    borderTopWidth: 0.5,
    borderTopColor: 'gray',
    paddingTop: 20,
  },

  ptext: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
