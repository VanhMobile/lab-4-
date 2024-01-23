/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const ContactType = [
  {
    name: 'Nguyen Viet Anh',
    email: 'anhnvph35035@gmail.com',
    position: '0123456789',
    photo:
      'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/416189569_353977557397211_4621349188759583882_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Cm_hW6KfxI8AX_-Foep&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBo0J1CbxWUWyx7LbMNcNTCVmTqU6JEMnY5Gg2RNNajsw&oe=65B394C0',
  },
  {
    name: 'Anh Nguyen Huy',
    email: 'Anh anh anh',
    position: '0984907397',
    photo:
      'https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/416189569_353977557397211_4621349188759583882_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Cm_hW6KfxI8AX_-Foep&_nc_ht=scontent.fhan14-1.fna&oh=00_AfBo0J1CbxWUWyx7LbMNcNTCVmTqU6JEMnY5Gg2RNNajsw&oe=65B394C0',
  },
];
const Bai1 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ContactType}
        keyExtractor={item => item.email}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image style={styles.avatarItem} source={{uri: item.photo}} />

            <View style={styles.bodyItem}>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              <Text>{item.position}</Text>
            </View>

            <TouchableOpacity style={styles.callButton}>
              <Text style={{fontWeight: 'bold', color: '#FFF'}}>Call</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB6C1',
    height: '100%',
    padding: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  callButton: {
    width: 40,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d9ce3',
    borderRadius: 10,
  },
  avatarItem: {width: 50, height: 50, borderRadius: 10, resizeMode: 'contain'},
});

export default Bai1;
