import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import MyFastImage from '../../components/MyFastImage';
import MyLowImage from '../../components/MyLowImage';
import {DataContext} from '../../context/context';
import firestore from '@react-native-firebase/firestore';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoCart from '../../components/InfoCart';
import {colors} from '../../utils/colors';
import MyIcon from '../../components/MyIcon';
import auth from '@react-native-firebase/auth';
import MyButton from '../../components/MyButton';
import PressebleIcon from '../../components/PressebleIcon';
import SpecialButton from '../../components/SpecialButton';
import {values} from '../../utils/screenValue';
import LightButton from '../../components/LightButton';

const ProfileScreen = () => {
  const {avaibleUser, setAvaibleUser, setUserInfo, userInfo} =
    useContext(DataContext);
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //subscriber değişkeni oluştrurak sürekli çalışmasını return ettiğinde engelliyor
    const subscriber =
      //Veri Tabanındaki Verilerimizin yolunu Belirttik Önce
      //Post=>userID=>UserPost====>bu koleksiyondaki dökümalarda olduğu post bilgileri burayı onSnapshot ile dinlemey aldık

      firestore()
        .collection('Post')
        .doc(userInfo?.userID)
        .collection('UserPost')

        //Herbir Post Bilgisine sahib document lerin olduğu collection u
        //onSnapshot metodu ile döndük.bu metod bize bir QuerySnap döndürür
        //Dönen QuerySnap bizim document lerimizdir
        //Daha sonra consoldan kontrol ederek documentlerdeki verilere eriştik

        .onSnapshot(QuerySnapshot => {
          let postArray = [];
          QuerySnapshot._docs.map(p => {
            //Alltaki console log document deki verileri getirir
            // console.log(p._data)

            // Bizim Gelen post bilgileri obje geliyor
            //Ancak Flatlistte data olarak liste olması gerekiyor
            //bizde gelen her bir objeyi postArray dizisine ekliyoruz
            postArray.push(p._data);
            //oluşturduğumuz listeyi posts statemize aktarıyoruz
            setPosts(postArray);
          });
        });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [userInfo?.userID]);

  // console.log(posts);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.headContainer}>
          <PressebleIcon name={'arrow-back-outline'} size={25} />
          <Text style={styles.name}>{userInfo?.name}</Text>
          <PressebleIcon name={'settings-outline'} size={25} />
        </View>

        <View style={styles.userBar}>
          <MyFastImage image={userInfo?.photo} style={styles.profilePhoto} />

          <View style={styles.rightSide}>
            <View style={styles.userItem}>
              <Text style={styles.name}>574</Text>
              <Text style={styles.type}>Post</Text>
            </View>
            <View style={styles.userItem}>
              <Text style={styles.name}>100</Text>
              <Text style={styles.type}>Takipçi</Text>
            </View>
            <View style={styles.userItem}>
              <Text style={styles.name}>712</Text>
              <Text style={styles.type}>Takip Edilen</Text>
            </View>
          </View>
        </View>

        <View style={styles.userInfoBar}>
          <Text style={styles.name}>{userInfo?.name}</Text>
          <Text>{userInfo?.bio}</Text>
          <Text>Takip edenler info alanı</Text>
        </View>

        <View style={styles.buttonBar}>
          <SpecialButton label={'Takip Et'} />
      <LightButton label={'Mesaj'}/>
          <PressebleIcon name={'person-add-outline'} size={25} />
        </View>

        <View style={styles.changerBar}>
          <PressebleIcon name={'apps-outline'} size={25} />
          <PressebleIcon name={'image-outline'} size={25} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.col}>
          <MyFastImage style={styles.galleryImage} image={userInfo?.photo} />
        </View>

        <View style={styles.col}>
          <MyFastImage style={styles.galleryImage} image={userInfo?.photo} />
        </View>

        <View style={styles.col}>
          <MyFastImage style={styles.galleryImage} image={userInfo?.photo} />
        </View>

        <View style={styles.col}>
          <MyFastImage style={styles.galleryImage} image={userInfo?.photo} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  topContainer: {
    flex: 1,
  },

  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: 'white',
  },

  name:{
fontSize:20,
fontWeight:'bold'
  },

  type:{

  color:'gray'
  },


  userBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  rightSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    gap: 30,
  },

  userInfoBar: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor:'white'
  },

  buttonBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor:'white'
  },

  changerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor:'white'
  },

  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    flexWrap: 'wrap',
  },
  col: {
    width: values.windowWidth / 3,
    height: values.windowWidth / 3,

    padding: 1,
  },

  galleryImage: {
    width: '100%',
    height: '100%',
    padding: 3,
  },

  profilePhoto: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#fb3958',
  },
});
