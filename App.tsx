import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';
import VideoPlayerDemo from './src/screens/VideoPlayerDemo/VideoPlayerDemo';
import VideoPlayerDemo2 from './src/screens/VideoPlayerDemo/VideoPlayerDemo2';
import VideoPlayerWebView from './src/screens/VideoPlayerDemo/VideoPlayerWebView';

export default function App() {
  return (
    <View className="" style={{flex: 1}}>

      {/* <Home/> */}
      {/* <VideoPlayerDemo/> */}
      {/* <VideoPlayerDemo2/> */}
      <VideoPlayerWebView/>
      
      <StatusBar style="auto" />
    </View>
  );
}
