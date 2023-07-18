import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar';
import PressebleText from '../../components/PressebleText';
import {colors} from '../../utils/colors';
import SearchCard from '../../components/SearchCard';
import PressebleIcon from '../../components/PressebleIcon';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
const SearchScreen = () => {
  const [searchQuery, setSearchQuary] = useState(null);
  const [resultAvaible, setResultAvaible] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const navigation = useNavigation();
  const handleSearch = query => {
    setSearchQuary(query);

    firestore()
      .collection('Users')
      .where('name', '==', query)
      .get()
      .then(querySnapshot => {
        const users = [];
        setResultAvaible(true);
        querySnapshot.forEach(documentSnapshot => {
          //  console.log(documentSnapshot.data());

          const user = documentSnapshot.data();
          users.push(user);
        });

        setSearchResults(users);
      });
    if (!searchResults) {
      setResultAvaible(false);
    } else {
      setResultAvaible(true);
    }
  };
  console.log(searchResults[0]?.userID);

  console.log(resultAvaible);

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.mainContainer}>
          <PressebleIcon name={'search-outline'} size={15} />
          <TextInput
            value={searchQuery}
            onChangeText={text => handleSearch(text)}
            placeholder="Aramak İstediğniz Kullanıcı"
          />
        </View>
        <PressebleText label={'İptal'} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Yakındakiler</Text>
        <PressebleText style={styles.contentPText} label={'Tümünü Gör'} />
      </View>

      {resultAvaible == false ? (
        <SearchCard
          onPress={() => navigation.navigate('ProfileScreen', 'merahab')}
          uName={'Abc ABC'}
          uSName={'fhasanc'}
          pPhoto={
            'https://images.unsplash.com/photo-1594167154836-838be958f605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }
        />
      ) : (
        <SearchCard
          onPress={() =>
            navigation.navigate('ProfileScreen', {
              uid: searchResults[0]?.userID,
            })
          }
          uName={searchResults[0]?.name}
          uSName={searchResults[0]?.name}
          pPhoto={searchResults[0]?.photo}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 15,
    borderBottomWidth: 0.2,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#FAF3F0',
    padding: 20,
    borderRadius: 30,
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
  },

  contentText: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  contentPText: {
    color: '#75C2F6',
    fontWeight: 'bold',
  },
});
