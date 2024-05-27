import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import Colors from '../../../assets/Colors/Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
// import {Picker} from '@react-native-picker/picker';

export default function HomeScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState();
 const x= '>';
 const {user} = useUser();
  return (
    <View>
      <Header/>
      <View style={styles.container}>
         <View style={styles.box1}>
         <Image source={{uri:user.imageUrl}} style={{
          width:50,
          height:50,
          borderRadius:100,
          margin:5,
          marginLeft:9,
          position:'absolute',
        }}/>
            <Text style={{
              marginTop:17,
              marginLeft:70,
              fontFamily:'outfit',
              fontSize:19,
            }}>Selam, {user.firstName}   </Text>
            <Ionicons style={styles.searchIcon} name="search-outline" size={24} color="white" />
            <Ionicons style={styles.notifyIcon} name="notifications-outline" size={24} color="white" />
         </View>
         <View style={styles.box2}>
           <Text style={{
              fontFamily:'outfit-bold',
              fontSize:16,
              color:Colors.WHITE,
            }}>Balance(ETB)</Text>
            <Text style={{
              fontFamily:'outfit-bold',
              fontSize:22,
              color:Colors.WHITE,
            }}>100 ETB</Text>
        </View>
        <View style={styles.box3}>
          <Text style={{
             fontFamily:'outfit-bold',
             fontSize:16,
             color:Colors.WHITE,
             marginRight:170,
             marginLeft:-230,
          }}>endekise(ETB)</Text>
          <Text style={{
             fontFamily:'outfit-bold',
             fontSize:16,
             color:Colors.WHITE,
             marginLeft:10,
          }}>Reward(ETB)</Text>
        </View>
        <View style={styles.box4}>
          <Text style={{
             fontFamily:'outfit-bold',
             fontSize:16,
             color:Colors.WHITE,
             marginRight:226,
             marginLeft:-348,
          }}>00 ETB</Text>
          <Text style={{
             fontFamily:'outfit-bold',
             fontSize:16,
             color:Colors.WHITE,
          }}>300ETB</Text>
        </View>
      </View>
   <ScrollView contentContainerStyle={styles.contentContainer}>
      {/* body boxes are displayed here ! */}
      <View style={styles.upperBodyContainer}>
        <TouchableOpacity onPress={()=>alert('money is sent!')}>
            <View style={styles.items}>
            {/* <FontAwesome5  name="money-check" size={24} color={Colors.GREEN} /> */}
            <Fontisto name="wallet" size={25} color={Colors.GREEN}/>
            <Text style={{
              fontFamily:'outfit',
              fontSize:15,
              marginTop:8
            }}>Send Money</Text>
            </View>
        </TouchableOpacity>
         
         <TouchableOpacity>
              <View style={styles.items}>
              <AntDesign name="mobile1" size={24} color={Colors.GREEN}  />
              <Text style={{
                fontFamily:'outfit',
                fontSize:15,
                marginTop:8
              }}>Buy Airtime</Text>
              </View>
         </TouchableOpacity>
         
         <TouchableOpacity>
              <View style={styles.items}>
              <Fontisto name="shopping-package" size={24} color={Colors.GREEN} />
              <Text style={{
                fontFamily:'outfit',
                fontSize:15,
                marginTop:8
              }}>Buy Package</Text>
              </View>
         </TouchableOpacity>
         

         <TouchableOpacity>
            <View style={styles.items}>
            <FontAwesome name="money" size={24} color={Colors.GREEN}  />
            <Text style={{
              fontFamily:'outfit',
              fontSize:15,
              marginTop:8
            }}>Cash In/Out</Text>
            </View>
         </TouchableOpacity>
         
         <TouchableOpacity>
              <View style={styles.items}>
              <Image source={require('./../../../assets/images/dashen logo.png')} style={{
                  width:40,
                  height:40,
                  marginTop:10,
                }}/>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginTop:0,
            }}>service with</Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize:13,
            }}>Dashen Bank</Text>
              </View>
          </TouchableOpacity>
         <TouchableOpacity>
              <View style={styles.items}>
              <Image source={require('./../../../assets/images/cbe logo.png')} style={{
                  width:40,
                  height:40,
                  marginTop:15,
                }}/>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginTop:0,
            }}>service with</Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize:13,
            }}>CBE</Text>
              </View>
          </TouchableOpacity>
         <TouchableOpacity>
              <View style={styles.items}>
              <Entypo style={{marginTop:18}} name="shop" size={30} color={Colors.GREEN}/>
              <Text style={{
                fontFamily:'outfit',
                fontSize:15,
                marginTop:1,
              }}>Pay for</Text>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
            }}>Merchants</Text>
              </View>
          </TouchableOpacity>
         <TouchableOpacity>
              <View style={styles.items}>
              <AntDesign name="appstore1" size={24}  color={Colors.GREEN} />
              <Text style={{
                fontFamily:'outfit',
                fontSize:15,
                marginTop:8
              }}>App</Text>
              </View>
          </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.vvvv}>
      <Image source={require('./../../../assets/images/my banner.png')} style={{
        width:375,
        height:110,
        marginTop:110,
        borderRadius:15,
        alignSelf:'center',
        marginRight:15,
        marginLeft:15,
      }} />
      <Image source={require('./../../../assets/images/image1.jpg')} style={{
        width:375,
        height:110,
        marginTop:110,
        borderRadius:15,
        alignSelf:'center',
        marginRight:15,
        marginLeft:15,
      }} />
      <Image source={require('./../../../assets/images/image2.jpg')} style={{
        width:375,
        height:110,
        marginTop:110,
        borderRadius:15,
        alignSelf:'center',
        marginRight:15,
        marginLeft:15,
      }} />
      <Image source={require('./../../../assets/images/image3.png')} style={{
        width:375,
        height:110,
        marginTop:110,
        borderRadius:15,
        alignSelf:'center',
        marginRight:15,
        marginLeft:15,
      }} />
     
      </ScrollView>
      <Text style={{
        alignSelf:'flex-end',
        marginRight:25,
        marginTop:15,
        color:'blue',
        fontFamily:'outfit',
        fontSize:15,

      }}>Transaction Details        {x} </Text>
      <View style={styles.lowerBodyContainer}>
       
      <TouchableOpacity>
        <View style={styles.items}>
        <Image source={require('./../../../assets/images/Bank of Abyssinia Logo.png')} style={{
                  width:35,
                  height:35,
                  marginTop:8,
                }}/>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginTop:0,
            }}>Service with</Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginTop:-5,
            }}>Abyssinia</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.items}>
        <Image source={require('./../../../assets/images/adwa logo.png')} style={{
                  width:35,
                  height:35,
                  marginTop:12,
                }}/>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginTop:0,
            }}>Adwa victory</Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginBottom:8,
            }}>Museum</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.items}>
        <Image source={require('./../../../assets/images/national id logo.png')} style={{
                  width:35,
                  height:35,
                  marginTop:12,
                }}/>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginTop:0,
            }}>National ID</Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginTop:-5,
            }}>(Fayeda)</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.items}>
        <Image source={require('./../../../assets/images/Ethio Telecom Logo.png')} style={{
                  width:35,
                  height:35,
                  marginTop:12,
                }}/>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
              marginTop:0,
            }}>Pay Ethio</Text>
            <Text style={{
              fontFamily:'outfit',
              fontSize:13,
            }}>telecom Bill</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity>
         <View style={styles.items}>
         <FontAwesome name="calendar" size={24} color={Colors.GREEN}/>
         <Text style={{
                fontFamily:'outfit',
                fontSize:15,
                marginTop:1,
              }}>Schedule</Text>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
            }}>Payment</Text>
         </View>
      </TouchableOpacity>
      <TouchableOpacity>
         <View style={styles.items}>
         <Ionicons name="wallet-outline" size={24} color={Colors.GREEN}  />
         <Text style={{
                fontFamily:'outfit',
                fontSize:15,
                marginTop:1,
              }}>Transfer to</Text>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
            }}>Wallet</Text>
         </View>
      </TouchableOpacity>
      <TouchableOpacity>
          <View style={styles.items}>
          <FontAwesome name="bank" size={24} color={Colors.GREEN} />
          <Text style={{
                fontFamily:'outfit',
                fontSize:15,
                marginTop:1,
              }}>Transfer to</Text>
              <Text style={{
              fontFamily:'outfit',
              fontSize:13,
            }}>Bank</Text>
          </View>
      </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.items}>
            <AntDesign name="pluscircleo" size={24} color={Colors.GREEN} />
            <Text style={{
                  fontFamily:'outfit',
                  fontSize:15,
                  marginTop:10,
                   
                }}>More</Text>  
            </View>  
        </TouchableOpacity>
        </View>


    </ScrollView>
      <TouchableOpacity style={styles.button} onPress={()=>alert('scanning...')} >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center',
                fontFamily:'outfit-bold',
                fontSize:17,
                
            }}>Scan QR</Text>
            <MaterialIcons name="qr-code-scanner" size={24} color="white" style={{
            alignSelf:'flex-start',
            flexDirection:'row',
            marginTop:-24,
            marginLeft:106
          }}/>
      </TouchableOpacity>
     
    </View>
    
  )
}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    width:'100%',
    height:150,
    backgroundColor:Colors.GREEN,
    flexDirection:'row',
  },
  box1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:92,
  },
  box2:{
    marginTop:45,
    display:'flex',
    // marginTop:50,
    marginLeft:'40%',
    alignItems:'center',
    position:'absolute'
  },
  box3:{
    position:'absolute',
    marginTop:100,
    marginLeft:255,
    flexDirection:'row',
  },
  box4:{
    position:'absolute',
    marginTop:120,
    flexDirection:'row',
    width:1000,
    marginLeft:390,
  },
  upperBodyContainer:{
      display:'flex',
      justifyContent:'space-between',
      height:100,
      flexDirection:'row',
      // key property to align items in responsiveness.
      flexWrap:'wrap'
  },
  lowerBodyContainer:{
    display:'flex',
    justifyContent:'space-between',
    height:100,
    flexDirection:'row',
    // key property to align items in responsiveness.
    flexWrap:'wrap',
    marginBottom:600
},
  items:{
    backgroundColor: 'white',
    color:'white',
    width:82,
    height:82,
    alignItems:'center',
    margin:10,
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
   
  },
  txtprofile:{
    marginTop:15,
    marginLeft:15,
    fontFamily:'outfit-medium',
    fontSize:20,
  },
  searchIcon:{
    margin:15,
    marginLeft:80,
  },
  notifyIcon:{
    marginTop:15,
    marginLeft:-8,
  },

  button:{
    backgroundColor:Colors.BLUE,
    padding:15,
    width:'88%',
    alignSelf:'center',
    borderRadius:10,
    dispaly:'flex',
    marginTop:-265,
    
  },
  contentContainer: {
    height: 1080,
    
  },
  vvvv:{
    height:250,
    marginBottom:-500,
  }
})

