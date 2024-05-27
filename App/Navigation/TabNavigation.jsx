import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import PaymentScreen from '../Screen/PaymentScreen/PaymentScreen';
import AppScreen from '../Screen/AppScreen/AppScreen';
import AccountScreen from '../Screen/AccountScreen/AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../assets/Colors/Colors';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
   
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveBackgroundColor:Colors.GREEN,
        tabBarInactiveBackgroundColor:Colors.GREEN
        
    }} 
    >
      <Tab.Screen name='home' component={HomeScreen} options={{
            tabBarActiveTintColor:Colors.WHITE,
            tabBarInactiveTintColor:Colors.GRAY,
            tabBarLabelStyle:{fontFamily:'outfit', fontSize:15,marginBottom:5},
            tabBarIcon:({size,color})=>(
              <Ionicons name="home-outline" size={20} color={color}  />
          ),
            tabBarLabel:'Home',
        }}/>
      <Tab.Screen name="payment" component={PaymentScreen} 
        options={{
          tabBarActiveTintColor:Colors.WHITE,
            tabBarInactiveTintColor:Colors.GRAY,
          tabBarLabelStyle:{fontFamily:'outfit',fontSize:15,marginBottom:5},
          tabBarIcon:({size,color})=>(
            <Ionicons name="card-outline" size={20} color={color} />
        ),
          tabBarLabel:'Payment',
      }}
      />
      <Tab.Screen name="app" component={AppScreen}
      options={{
        tabBarActiveTintColor:Colors.WHITE,
            tabBarInactiveTintColor:Colors.GRAY,
        tabBarLabelStyle:{fontFamily:'outfit', fontSize:15,marginBottom:5},
        tabBarIcon:({size,color})=>(
          <AntDesign name="appstore-o" size={20} color={color}/>
      ),
        tabBarLabel:'App',
    }} 
      />
      <Tab.Screen name="account" component={AccountScreen}
      options={{
        tabBarActiveTintColor:Colors.WHITE,
        tabBarInactiveTintColor:Colors.GRAY,
        tabBarLabelStyle:{fontFamily:'outfit',fontSize:15,marginBottom:5},
        tabBarIcon:({size,color})=>(
          <Ionicons name="person-outline" size={20} color={color} />
      ),
        tabBarLabel:'Account',
    }}
      />
    </Tab.Navigator>
    

    
  )
}

