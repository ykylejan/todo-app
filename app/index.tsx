import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

const Home = () => {
  return <Redirect href="/(auth)/welcome" />
}

export default Home