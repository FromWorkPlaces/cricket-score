import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';
import VideoPlayerDemo from './src/screens/VideoPlayerDemo/VideoPlayerDemo';

export default function App() {
  return (
    <View className="" style={{flex: 1}}>

      {/* <Home/> */}
      <VideoPlayerDemo/>
      
      <StatusBar style="auto" />
    </View>
  );
}
