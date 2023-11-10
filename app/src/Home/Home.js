import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Button title="Go to Second Screen" onPress={() => navigation.navigate('Second')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})