import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useContext, useState} from 'react'
import firestore from '@react-native-firebase/firestore';
import { DataContext } from '../../context/context';
DataContext
const MyPosts = () => {

    const { userInfo} =useContext(DataContext);
    const[posts,setPosts]=useState()

  

    useEffect(() => {
        //subscriber değişkeni oluştrurak sürekli çalışmasını return ettiğinde engelliyor
        const subscriber = 
        
        
        //Veri Tabanındaki Verilerimizin yolunu Belirttik Önce
        //Post=>userID=>UserPost====>bu koleksiyondaki dökümalarda olduğu post bilgileri burayı onSnapshot ile dinlemey aldık
        firestore()
          .collection('Post').doc(userInfo?.userID).collection('UserPost')
          
          //Herbir Post Bilgisine sahib document lerin olduğu collection u
          //onSnapshot metodu ile döndük.bu metod bize bir QuerySnap döndürür
          //Dönen QuerySnap bizim document lerimizdir
          //Daha sonra consoldan kontrol ederek documentlerdeki verilere eriştik

          .onSnapshot((QuerySnapshot)=>{

           
            QuerySnapshot._docs.map((p)=>{




                //Alltaki console log document deki verileri getirir
                // console.log(p._data)
                setPosts(p._data)
            })
          })
          
         
    // Stop listening for updates when no longer required
        return () => subscriber();
      }, [userInfo?.userID]);

   console.log(posts)
    

  return (
    <View>
      <Text>MyPosts</Text>
    </View>
  )
}

export default MyPosts

const styles = StyleSheet.create({})