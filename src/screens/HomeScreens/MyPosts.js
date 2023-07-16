import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {DataContext} from '../../context/context';
import PostCard from '../../components/PostCard';
import {SafeAreaView} from 'react-native-safe-area-context';
DataContext;
const MyPosts = () => {
  const {userInfo} = useContext(DataContext);
  const [posts, setPosts] = useState();


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

  //console.log(posts);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard post={item} />}
      />
    </SafeAreaView>
  );
};

export default MyPosts;

const styles = StyleSheet.create({});
