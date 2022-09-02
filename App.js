import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>87 É DO FLAMENGO!!</Text>
      <Text style={styles.txt}>E 2022 TEM MAIS</Text>
      <Image style={styles.img} source={require ('./flmengo.jpeg')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f99',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  text: {
    fontSize: 50,
    color: '#fff'
  },

  txt: {
    fontSize: 30,
  },

  img: {
    width: 150,
    wegth: 20,
  }
});

