import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  StatusBar,
  Text,
} from 'react-native';

const Bai2 = () => {
  const [refresh, setRefresh] = useState(false);
  const [barStyleLightContent, setBarStyleLightContent] = useState(false);
  const reload = () => {
    setRefresh(false);
    setBarStyleLightContent(!barStyleLightContent);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={reload} />
      }>
      <StatusBar
        barStyle={barStyleLightContent ? 'light-content' : 'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />

      <Text style={{fontWeight: '900', fontSize: 20, color: 'black'}}>
        Keo de load
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c0eaff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Bai2;
