import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const ThirdScreen = ({navigation}) => {
  return (
    <View>
    <Button title="Go Back to Home Screen" onPress={() => navigation.navigate('Home')} />
  </View>
  )
}

export default ThirdScreen

const styles = StyleSheet.create({})