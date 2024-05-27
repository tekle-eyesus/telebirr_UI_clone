import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../Header/Header'
import Colors from '../../../assets/Colors/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import { Ionicons} from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AccountScreen() {
  const {user} = useUser();//important to get the user information
  return (
    <View>
      <Header/>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Image source={{uri:user.imageUrl}} style={{
          width:60,
          height:60,
          borderRadius:10,
          margin:10,
          position:'absolute',
        }}/>
        <Text style={{
          margin:10,
          marginLeft:85,
          fontFamily:'outfit-medium',
          fontSize:20
        }}>{user?.fullName}</Text>
        <Text style={{
          marginBottom:19,
          marginLeft:85,
          fontFamily:'outfit'
        }}>{user?.primaryEmailAddress.emailAddress}</Text>
        <TouchableOpacity>
         <MaterialIcons name="qr-code-scanner" size={45} color={Colors.GREEN} style={{
            alignSelf:'flex-end',
            flexDirection:'row',
            marginTop:-63,
            marginRight:30,
          }}/></TouchableOpacity>
      </View>
      <View style={styles.lowerBox}>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start'
              }}>
                
             <Text style={styles.text}>Change Profile</Text>
             <Ionicons name="person" size={24} color={Colors.GREEN}  style={{
                  marginTop:-25,
                  marginLeft:10,
                }}/>
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
              }}>
             <Text style={styles.text}>Change PIN</Text>
                <Ionicons name="lock-closed" size={24} color={Colors.GREEN} style={{
                  marginTop:-25,
                  marginLeft:10,
                }}/>
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
              }}>
             <Text style={styles.text}>Change Language</Text>
             <Ionicons name="language" size={26} color={Colors.GREEN}  style={{
        marginTop:-25,
        marginLeft:10,
                }}/>
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
              }}>
             <Text style={styles.text}>Security Question</Text>
                <FontAwesome name="question-circle" size={26} color={Colors.GREEN} style={{
                  marginTop:-25,
                  marginLeft:10,
                }}/>
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
              }}>
             <Text style={styles.text}>Biometric Authentication</Text>
             <Ionicons name="finger-print" size={26} color={Colors.GREEN}  style={{
                  marginTop:-25,
                  marginLeft:10,
                }}/>
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
              }}>
             <Text style={styles.text}>Invite Friends</Text>
             <Ionicons name="person-add" size={26} color={Colors.GREEN}  style={{
                  marginTop:-25,
                  marginLeft:10,
                }}/>
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
              }}>
             <Text style={styles.text}>FAQ</Text>
                <MaterialCommunityIcons name="head-question" size={26} color={Colors.GREEN} style={{
                  marginTop:-25,
                  marginLeft:10,
                }}/>
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
              }}>
             <Text style={styles.text}>Feedback</Text>
                <MaterialIcons name="feedback" size={24} color={Colors.GREEN} style={{
                  marginTop:-25,
                  marginLeft:10,
                }} />
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding:5,
              }}>
             <Text style={styles.text}>Contact Us</Text>
             <MaterialIcons name="connect-without-contact" size={24} color={Colors.GREEN} style={{
                  marginTop:-25,
                  marginLeft:10,
                }} />
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBlockColor:Colors.GRAY,
                padding:5,
              }}>
             <Text style={styles.text}>About</Text>
                <FontAwesome name="exclamation-circle" size={24} color={Colors.GREEN} style={{
                  marginTop:-25,
                  marginLeft:10,
                }} />
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBlockColor:Colors.GRAY,
                padding:5,
              }}>
             <Text style={styles.text}>Share</Text>
                <FontAwesome name="share-alt-square" size={24} color={Colors.GREEN} style={{
                  marginTop:-25,
                  marginLeft:10,
                }} />
          </View>
            <View
              style={{
                margin:4,
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBlockColor:Colors.GRAY,
                padding:5,
              }}>
             <Text style={styles.text}>My Coupon</Text>
                <Image source={require('./../../../assets/images/Ethio Telecom Logo.png')} style={{
                  marginTop:-32,
                  marginLeft:10,
                  width:32,
                  height:32,
                  marginRight:5
                }} />
          </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>alert('scanning...')} >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit-bold',
                fontSize:17,
                
            }}>LogOut</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width:380,
    height:85,
    margin:10,
    backgroundColor:'white',
    alignSelf:'center',
    borderRadius:10
  },
  lowerBox:{
    width:380,
    height:639,
    margin:10,
    backgroundColor:'white',
    alignSelf:'center',
    borderRadius:10
  },
  text:{
    marginLeft:45,
    fontFamily:'outfit-medium',
    marginTop:15,
    padding:0,
  },
  button:{
    backgroundColor:Colors.BLUE,
    padding:15,
    width:'88%',
    alignSelf:'center',
    borderRadius:10,
    dispaly:'flex',
    marginTop:5,
    
  },
  contentContainer: {
    height: 900,
  },
})
