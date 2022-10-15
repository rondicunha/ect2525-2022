import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function PrecalculoScreen() {
  const videos = [
    {
      id: 1,
      src: 'THxRSX9tPMA'
    },
    {
      id: 2,
      src: 'p3IvE0epaOo'
    },
    {
      id: 3,
      src: '1p9IQmzfBQM'
    },
    {
      id: 4,
      src: 'o5wqUiHjzTI'
    },
    {
      id: 5,
      src: 'AUcCGVbp2vk'
    },
    {
      id: 6,
      src: '4n6Y9hQIIV4'
    },
    {
      id: 7,
      src: '3lAaH3hgLx4'
    }
  ]

  function renderItem({ item }) {
    return (
      <View>
        <YoutubePlayer height={250} play={false} videoId={item.src} />
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#003153'
  }
})
