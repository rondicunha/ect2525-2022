
import React from 'react'
import { StyleSheet, Image, Text, View, FlatList } from 'react-native'


export default function Continuar() {
    const aulasIniciadas = [
        {
            id: 1,
            aula: 'Calculo 1',
            src: require('../images/calculo1.jpg'),
        },
        {
            id: 2,
            aula: 'Calculo 1',
            src: require('../images/calculo1.jpg'),
        },
        {
            id: 3,
            aula: 'Calculo 1',
            src: require('../images/calculo1.jpg'),
        },
        {
            id: 4,
            aula: 'Calculo 1',
            src: require('../images/calculo1.jpg'),
        },
        {
            id: 5,
            aula: 'Calculo 1',
            src: require('../images/calculo1.jpg'),
        },
        {
            id: 6,
            aula: 'Calculo 1',
            src: require('../images/calculo1.jpg'),
        },
        {
            id: 7,
            aula: 'Calculo 1',
            src: require('../images/calculo1.jpg'),
        },
    ];

    function renderItem({item}) {
        return <View style={styles.continuar}>
            <Image style={styles.foto} source={item.src} />
            <Text>{item.aula}</Text>
        </View>
    }

    return (
        <View>
            <View style={styles.continue}>
                <Text style={styles.descricao}>Aulas</Text>
            </View>

            <View style={styles.continuar}>
                <FlatList
                    data= {aulasIniciadas}
                    renderItem = {renderItem}
                    keyExtractor = {item => item.id}
                    showsVerticalScrollIndicator = {false}
                    />
                      
            </View>
        </View>

     );
}    

const styles = StyleSheet.create({
  
    continue: {
      height: 30,
      backgroundColor: '#003153',
      flexDirection: 'row',
        alignItems: 'center',
    
    },
    continuar: {
        
      flexDirection: 'row',
      padding: 7,
    },
  
    foto: {
      height: 110,
      width: 150,
    },

    descricao: {
        fontSize: 20,
        color: '#E8E59B',
        
        alignItems: 'center',
        
    },
  });
  