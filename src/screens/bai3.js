/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Touchable,
  TouchableOpacity,
  Text,
} from 'react-native';

const Bai3 = () => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput placeholder="Nhap tai khoan" style={styles.textInput} />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          secureTextEntry={secure}
          placeholder="Nhap mat khau"
          style={styles.textInput}
        />
      </KeyboardAvoidingView>

      <TouchableOpacity
        onPress={() => {
          secure ? setSecure(false) : setSecure(true);
        }}>
        <View
          style={{
            backgroundColor: '#FFB6C1',
            padding: 16,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 24,
          }}>
          <Text>secureTextEntry</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c0eaff',
    flex: 1,
    position: 'relative',
    paddingTop: 30,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    paddingStart: 10,
  },
});

export default Bai3;
