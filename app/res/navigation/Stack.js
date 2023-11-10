import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../src/Home/Home';
import SecondScreen from '../../src/SecondScreen/SecondScreen';
import ThirdScreen from '../../src/ThirdScreen/ThirdScreen';

const Stacks= createStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator>
        <Stacks.Screen name="Home" component={Home} />
        <Stacks.Screen name="Second" component={SecondScreen} />
        <Stacks.Screen name="Third" component={ThirdScreen} />
      </Stacks.Navigator>
    </NavigationContainer>
  )
}

export default Stack

const styles = StyleSheet.create({})