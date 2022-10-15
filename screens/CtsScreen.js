import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function CtsScreen() {
  const videos = [
    {
      id: 1,
      src: 'iruUnXNBJ3k'
    },
    {
      id: 2,
      src: 'RpT_h30e6Jc'
    },
    {
      id: 3,
      src: 'XolK-kGkG8o'
    },
    {
      id: 4,
      src: 'Osw7JOHl9Jw'
    },
    {
      id: 5,
      src: 'PGA3MVxpwYE'
    },
    {
      id: 6,
      src: 'sLA1B8OdzYA'
    },
    {
      id: 7,
      src: 'KUzLY3bt-lg'
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
