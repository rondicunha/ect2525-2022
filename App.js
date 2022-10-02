import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import Constants from 'expo-constants'
import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image
          style={styles.logoECT}
          source={require('./images/logoECT.png')}
        />
        <Image style={styles.perfil} source={require('./images/perfil.jpg')} />
      </View>

      <View style={styles.aba}>
        <Text>Pré-Calculo</Text>
        <Text>Calculo I</Text>
        <Text>VGA</Text>
        <Text>Quimica</Text>
        <Text>CTS</Text>
        <Text>PLE I</Text>
        <Text>Calcullo II</Text>
      </View>

      <View style={styles.continue}>
        <Text>Continuar assistindo como Usuario</Text>
      </View>

      <View style={styles.continuar}>
        <Image style={styles.foto} source={require('./images/calculo1.jpg')} />
        <Image style={styles.foto} source={require('./images/calculo1.jpg')} />
        <Image style={styles.foto} source={require('./images/calculo1.jpg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
  header: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#003153',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },

  aba: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7
  },

  logoECT: {
    height: 40,
    width: 40
  },

  continue: {
    flexDirection: 'row',
    height: 16
  },
  continuar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 7,
    alignItems: 'center'
  },

  foto: {
    height: 110,
    width: 90
  },

  perfil: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
})
