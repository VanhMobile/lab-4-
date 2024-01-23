/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Bai1 from './screens/bai1';
import Bai2 from './screens/bai2';
import Bai3 from './screens/bai3';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

function Menu() {
  const navigation = useNavigation();

  const buttonNavigator = (content, component) => {
    return (
      <Pressable onPress={() => navigation.navigate(component)}>
        <Text style={styles.buttonText}>{content}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {buttonNavigator('bai 1', 'Bai 1')}
      {buttonNavigator('bai 2', 'Bai 2')}
      {buttonNavigator('bai 3', 'Bai 3')}
    </View>
  );
}

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          animationEnabled: true,
        }}>
        <Stack.Screen name="PH35035" component={Menu} />
        <Stack.Screen name="Bai 1" component={Bai1} />
        <Stack.Screen name="Bai 2" component={Bai2} />
        <Stack.Screen name="Bai 3" component={Bai3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    borderRadius: 10,
    color: 'white',
  },
});
