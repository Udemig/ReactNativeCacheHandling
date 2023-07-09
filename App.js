import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import {DataProvider} from './src/context/context';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <>
      {/* Yukarı işaret fragment , parent element kullanmaya gerek olmadığı durumda parant elemnt görevi görür*/}

      {/* contex.js dosyamızda ki state lere ulaşmak için yine context.js dosyaımızda oluşturduğumuz DataProvider Fonskiyonu ile sarmaladık */}

      <DataProvider>
        <SafeAreaView style={{flex: 1}}>
          {/* Navigasyon Kullanmak için En componentteki navigasyon compenentini Navigatoin Container ile sarmalamalıyız*/}
          <NavigationContainer>
            {/*Uygulamadaki İlk Yönlendirmeyi Yapacak Navigator*/}
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </DataProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
