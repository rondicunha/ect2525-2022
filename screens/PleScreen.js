import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function PleScreen() {
  const videos = [
    {
      id: 1,
      src: 'gZkT7sV8cYM'
    },
    {
      id: 2,
      src: '5r-EJ34I0PE'
    },
    {
      id: 3,
      src: 'xvY1BMVGyLI'
    },
    {
      id: 4,
      src: '6td-LkaPQuk'
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
