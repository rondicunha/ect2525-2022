import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import Header from '../componentes/Header'
import Barra from '../componentes/Barra'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <Header />
      <Barra navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
