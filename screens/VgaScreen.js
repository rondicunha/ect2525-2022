import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function VgaScreen() {
  const videos = [
    {
      id: 1,
      src: '6ZnTaxP4fM4'
    },
    {
      id: 2,
      src: 'fW4NCQ4IRxg'
    },
    {
      id: 3,
      src: 'mXjPnR8meIg'
    },
    {
      id: 4,
      src: 'Dhvg5UycQoQ'
    },
    {
      id: 5,
      src: 'kL8nT6dkyzk'
    },
    {
      id: 6,
      src: 'CoWatUekQz0'
    },
    {
      id: 7,
      src: '_El7rhkhTEc'
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
