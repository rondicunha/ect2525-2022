import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import Constants from 'expo-constants'

import Header from '../componentes/Header'
import Barra from '../componentes/Barra'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header navigation={navigation} />
      <Barra navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  }
})
