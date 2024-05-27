import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Header/Header'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../../assets/Colors/Colors';

export default function PaymentScreen() {
  return (
    <View>
      <Header/>
      <View style={styles.container}>
        <View style={styles.boxes}>
            <Text style={styles.text}>Utility</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>Tax and Government Service</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>Transport Service</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>Enternainment Service</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>E-commerce</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>Event and Ticketing</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>Education fee</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>Fundraising</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>Traffic Penalty</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
        <View style={styles.boxes}>
            <Text style={styles.text}>Third party insurance</Text>
            <AntDesign style={styles.logo} name="down" size={15} color={Colors.GRAY} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  boxes:{
    width:'93%',
    height:50,
    backgroundColor:Colors.WHITE,
    margin:5,
    borderRadius:10,
    flexDirection:'row', 
    display:'flex',
    justifyContent:'space-between'
  },
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
  },
  text:{
    marginTop:13,
    marginLeft:40,
    fontFamily:'outfit-medium',
    fontSize:18
  },
  logo:{
    marginTop:17,
    marginRight:10
  }
})
