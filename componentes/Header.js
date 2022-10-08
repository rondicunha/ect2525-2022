import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'


export default function Header() {
    return (

        <View style={styles.header}>
            <Image style={styles.logoECT} source={require('../images/logoECT.png')} />
            <Image style={styles.perfil} source={require('../images/perfil.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
header: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#003153',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },

  logoECT: {
    height: 40,
    width: 40,
  },

  perfil: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});