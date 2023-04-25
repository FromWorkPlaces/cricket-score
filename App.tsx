import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <View className="" style={{flex: 1}}>

      <Home/>
      
      <StatusBar style="auto" />
    </View>
  );
}
