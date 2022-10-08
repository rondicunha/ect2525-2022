import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import Constants from 'expo-constants'


import Header from './componentes/Header'
import Aba from './componentes/Aba'
import Continuar from './componentes/Continuar'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header/>
      <Aba/>
      <Continuar/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },

});
