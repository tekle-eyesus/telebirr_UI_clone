import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Colors/Colors'

export default function Boxes() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style={styles.container}>
        
       <View style={styles.items}>
            <Image source={require('./../../../assets/images/Ethio Telecom Logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>My Ethiotele</Text>
       </View>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/telegebeya logo.png')} style={{
                    width:70,
                    height:45,
                    marginTop:12,
                    }}/>
            <Text style={{
                marginTop:7,
                fontFamily:'outfit'
            }}>Telegebeya</Text>
       </View>
       <View style={styles.items}>
        <Image source={require('./../../../assets/images/logos/air Logo.png')} style={{
                    width:80,
                    height:35,
                    marginTop:12,
                    }}/>
            <Text style={{
                marginTop:7,
                fontFamily:'outfit'
            }}>Ethiopian Airlines</Text>
       </View>
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
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Dstv Logo.png')} style={{
                    width:87,
                    height:35,
                    marginTop:12,
                    }}/>
            <Text style={{
                marginTop:7,
                fontFamily:'outfit'
            }}>DsTV</Text>
       </View>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/star logo.png')} style={{
                    width:35,
                    height:35,
                    marginTop:12,
                    }}/>
            <Text style={{
                marginTop:7,
                fontFamily:'outfit'
            }}>E-Services</Text>
       </View>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/ride logo.png')} style={{
                    width:55,
                    height:35,
                    marginTop:12,
                    }}/>
            <Text style={{
                marginTop:7,
                fontFamily:'outfit'
            }}>Ride</Text>
       </View>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/transport.png')} style={{
                    width:55,
                    height:45,
                    marginTop:12,
                    }}/>
            <Text style={{
                marginTop:7,
                fontFamily:'outfit'
            }}>Public Transport</Text>
       </View>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/header logo.png')} style={{
                    width:100,
                    height:55,
                    marginTop:12,
                    }}/>
            <Text style={{
                marginTop:-8,
                fontFamily:'outfit'
            }}>Vien Services</Text>
       </View>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/cbe logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>CBE</Text>
       </View>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/Bank of Abyssinia Logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>Abyssinia Bank</Text>
       </View>
       <View style={styles.items}>
                
       </View>
       <View >
       <ScrollView horizontal={true} contentContainerStyle={styles.vvvv}>
      <Image source={require('./../../../assets/images/my banner.png')} style={{
        width:375,
        height:110,
        marginTop:10,
        borderRadius:15,
        alignSelf:"flex-start",
        marginRight:15,
        marginLeft:15,
      }} />
      <Image source={require('./../../../assets/images/image1.jpg')} style={{
        width:375,
        height:110,
        marginTop:10,
        borderRadius:15,
        alignSelf:"flex-start",
        marginRight:15,
        marginLeft:15,
      }} />
      <Image source={require('./../../../assets/images/image2.jpg')} style={{
        width:375,
        height:110,
        marginTop:10,
        borderRadius:15,
        alignSelf:"flex-start",
        marginRight:15,
        marginLeft:15,
      }} />
      <Image source={require('./../../../assets/images/image3.png')} style={{
        width:375,
        height:110,
        marginTop:10,
        borderRadius:15,
        alignSelf:"flex-start",
        marginRight:15,
        marginLeft:15,
      }} />
     
      </ScrollView>
       </View>
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Amhara Bank Logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>Amhara Bank</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Zemen Bank Logo.png')} style={{
                        width:75,
                        height:30,
                        marginTop:10,
                        }}/>
                <Text style={{
                    marginTop:10,
                    fontFamily:'outfit'
                }}>Zemen Bank</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Chapa Logo.png')} style={{
                        width:75,
                        height:15,
                        marginTop:19,
                        }}/>
                <Text style={{
                    marginTop:13,
                    fontFamily:'outfit'
                }}>My Ethiotele</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Gift Real Estate Logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>Gift Real Estate</Text>
       </View>
       </TouchableOpacity>
       
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Hibret Bank Logo.png')} style={{
                        width:75,
                        height:20,
                        marginTop:20,
                        }}/>
                <Text style={{
                    marginTop:15,
                    fontFamily:'outfit'
                }}>Hibret Bank</Text>
       </View>
       </TouchableOpacity>
       
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Ministry of Health Logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>Ministry of Health</Text>
       </View>
       </TouchableOpacity>
       
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Ministry of Transport Logo.png')} style={{
                        width:55,
                        height:30,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>MOT</Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/African Union Logo.png')} style={{
                        width:39,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>African Union</Text>
       </View>
       </TouchableOpacity>

       
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Kacha Logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>Kacha</Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Awash Bank Logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>Awash Bank</Text>
       </View>
       </TouchableOpacity>

       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Addis Ababa University Logo.png')} style={{
                        width:35,
                        height:40,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>AAU</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View style={styles.items}>
       <Image source={require('./../../../assets/images/logos/Bahir Dar University Logo.png')} style={{
                        width:35,
                        height:35,
                        marginTop:12,
                        }}/>
                <Text style={{
                    marginTop:7,
                    fontFamily:'outfit'
                }}>BDU</Text>
       </View>
       </TouchableOpacity>
       
      
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    // margin:10,
    backgroundColor:'transparent',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
    
  },
  items:{
    width:115,
    height:85,
    backgroundColor:Colors.WHITE,
    margin:10,
    display:'flex',
    borderRadius:10,
    alignItems:'center',
    
  },
  vvvv:{
    display:'flex',
    flexDirection:'row',
    height:200,
    position:'relative',
    backgroundColor:'transparent',
    alignItems:'flex-end',
    marginBottom:-60,
  },
  contentContainer:{
    height:1200,
  }
})
