import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import { useCallback } from 'react';
import Header from './App/Screen/Header/Header';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';
import * as SecureStore from "expo-secure-store";



SplashScreen.preventAutoHideAsync();


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    // font diclaration by its name all from the doc ofexpo fonts and google font outfit
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={'pk_test_ZGFybGluZy1nb2F0LTkxLmNsZXJrLmFjY291bnRzLmRldiQ'} 
   >
    <View style={styles.container} onLayout={onLayoutRootView} >
        <SignedIn>
        <NavigationContainer> 
            <TabNavigation/>
        </NavigationContainer>
       </SignedIn>
       <SignedOut>
          <Header/>
          <LoginScreen/>
        </SignedOut>
        <StatusBar  style="none"/>
    </View>
    </ClerkProvider>
  );
}
// 2 days to fix this bug:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:26,
  },
 
 

});

