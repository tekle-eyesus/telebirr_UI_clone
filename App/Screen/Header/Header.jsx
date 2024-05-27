import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { FontDisplay } from 'expo-font'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.tlecomImg} source={require('./../../../assets/images/telecom logo.png')}/>
      <Image style={styles.telebirrImg} source={require('./../../../assets/images/telebirr logo.png')}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    marginTop:0,
    backgroundColor:'white',
  },
  tlecomImg:{
    width:110,
    height:28,
    position:'relative',
    zIndex:10,
    padding:10,
    marginTop:7,
    marginLeft:12,
  },
  telebirrImg:{
    alignSelf:'flex-end',
    width:60,
    height:32,
    position:'relative',
    zIndex:10,
    padding:0,
    marginTop:-31,
    marginBottom:10,
    marginRight:10,
  }
})
