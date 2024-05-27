import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Header/Header'
import Boxes from './Boxes'

export default function AppScreen() {
  return (
    <View>
      <Header/>
      <Boxes>
      </Boxes>
    </View>
  )
}