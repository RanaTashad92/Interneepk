import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Welcome from './Components/welcome';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();  
  }, [500]);  

  return (
    <View style={{ flex: 1 }}>
      <Welcome />
    </View>
  );
};

export default App;
