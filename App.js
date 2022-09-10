import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Constants from 'expo-constants';
import {FontAwesomes} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.header}>
        <Image style={styles.u_perfil_img} source={require('./images/perfil.jpg')} />
        <Image style={styles.passarinho_img} source={require('./images/passarinho.png')} />
        <Image style={styles.mais_img} source={require('./images/mais.png')} />

      </View>

      <View style={styles.body}>
        <Image style={styles.u_perfil_img} source={require('./images/perfil.jpg')} />
        <Text style={styles.name_usuario}>Rondinelle Cunha</Text>
      </View>

      <View style={styles.footer}>
        <Image style={styles.img_footer} source={require('./images/home.icon.png')} />
        <Image style={styles.img_footer} source={require('./images/search.icon.png')} />
        <Image style={styles.img_footer} source={require('./images/notification.icon.png')} />
        <Image style={styles.img_footer} source={require('./images/mensage.icon.png')} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#15202B',
   
  
  },

  header: {
    backgroundColor: '#15202B',
    flexDirection: 'row',
    height: 80,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  u_perfil_img: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },

  passarinho_img: {
    height: 30,
    width: 30,
  },

  mais_img: {
    height: 20,
    width: 20,
  },

  body: {
    backgroundcolor: '#0f0',
    flexDirection: 'row',
    height: 620,
  },

  footer: {
    backgroundcolor: '#00f',
    flexDirection: 'row',
    height: 500,
    justifyContent: 'space-between',
    padding: 10,
  },

  img_footer: {
    height: 30,
    width: 30,

  },

  name_usuario: {
    color: '#fff',
  }
});

