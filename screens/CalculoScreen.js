import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function CalculoScreen() {
  const videos = [
    {
      id: 1,
      src: 'SyPN0XuMIMM'
    },
    {
      id: 2,
      src: 'HNS1eRBZqS4'
    },
    {
      id: 3,
      src: 'HlPgke2VjYU'
    },
    {
      id: 4,
      src: 'Vjy64QV0UR4'
    },
    {
      id: 5,
      src: 'jQI0bsCtdws'
    },
    {
      id: 6,
      src: 'QdPTWhACIwY'
    },
    {
      id: 7,
      src: 'HqtKJbNMm6Y'
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
