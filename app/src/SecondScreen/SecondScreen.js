import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const SecondScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Go to Third Screen" onPress={() => navigation.navigate('Third')} />
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})