import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function QuimicaScreen() {
  const videos = [
    {
      id: 1,
      src: 'RjG-qQa6RF4'
    },
    {
      id: 2,
      src: 'XTS2xOK3CQI'
    },
    {
      id: 3,
      src: 'L-SMn6-FcWU'
    },
    {
      id: 4,
      src: 'pYkZTjFJX-A'
    },
    {
      id: 5,
      src: 'afBRRb_hpcg'
    },
    {
      id: 6,
      src: 'IpjuyE2XEeM'
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

