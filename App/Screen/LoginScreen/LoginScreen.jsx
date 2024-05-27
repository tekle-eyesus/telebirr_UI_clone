import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Colors/Colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  //this function will direct to web browser to choose google account when the button is clicked
  const onPress=async()=>{ 
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }
  
  return (
    <View style={{backgroundColor:'#edf8e7' ,  marginTop:0}}>
      <Text style={styles.headerText}>Welcome To telebirr SuperApp</Text>
      <Text style={styles.text1}>All In One</Text>
      <Text style={styles.lblogin}>Login</Text>
      <Text style={styles.label}>Mobile Number</Text>
      <TextInput style={styles.tfphone} placeholder='Enter Mobile Number' textContentType='telephoneNumber' ></TextInput>

      <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text style={{
            color:Colors.WHITE,
            textAlign:'center',
            fontFamily:'outfit',
            fontSize:15,
        }}>Next</Text>
      </TouchableOpacity>
      <View style={styles.container}>
         <Text style={{
            margin:10,
         }}>Don't have an account? </Text>
          <Text style={{
                margin:10,
                color:Colors.GREEN,
                fontSize:15,
                fontFamily:'outfit',
          }} onPress={()=>console.log('new account created!')}>Create New Account </Text>
      </View>
      <View style={styles.container2}>
      <Text style={{
            margin:10,
            color:Colors.GREEN,
            fontFamily:'outfit',
            fontSize:15,
         }}>teleHub</Text>
          <Text style={{
                margin:10,
                color:Colors.GREEN,
                fontFamily:'outfit',
                fontSize:15,
          }} onPress={()=>alert('hello there!')}>Help</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{color:Colors.GREEN ,fontFamily:'outfit'}}>Terms and Conditions</Text>
        <Text style={{color:Colors.GRAY ,fontFamily:'outfit'}}>@2023 Ethio telecom.All rights reserved 1.0.0 version</Text>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  headerText:{
    fontFamily:'outfit-bold',
    fontSize:25,
    marginTop:136,
    alignSelf:'center',
    color:Colors.BLUE, 
  },
  text1:{
    fontFamily:'outfit-medium',
    fontSize:22,
    marginTop:10,
    alignSelf:'center',
    color:Colors.BLUE, 
  },
  lblogin:{
    fontFamily:'outfit-bold',
    fontSize:30,
    marginTop:15,
    alignSelf:'center',
    textDecorationLine:'underline',

  },
  tfphone:{
     borderColor:Colors.GREEN,
     borderWidth:3,
     width:'88%',
     height:42,
     alignSelf:'center',
     borderRadius:6,
     paddingLeft:40,
     marginTop:3,
     fontFamily:'outfit-medium',
  },
  label:{
    fontFamily:'outfit',
    marginTop:18,
    marginLeft:40,
    color:Colors.GRAY,
  },
  button:{
    backgroundColor:Colors.BLUE,
    padding:15,
    width:'88%',
    alignSelf:'center',
    borderRadius:10,
    dispaly:'flex',
    marginTop:35,
  },
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    fontFamily:'outfit',
  },
  container2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    fontFamily:'outfit',
  },
  footer:{
    display:'flex',
    alignItems:'center',
    marginTop:150,
    padding:50,
    
  }
})
