import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'



export default function Aba() {
  return (

<View style={styles.aba}>
        <Text>Pré-Calculo</Text>
        <Text>Calculo I</Text>
        <Text>VGA</Text>
        <Text>Quimica</Text>
        <Text>CTS</Text>
        <Text>PLE I</Text>
      </View>

  );
}

const styles = StyleSheet.create({
aba: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#003153',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
  },

 });
