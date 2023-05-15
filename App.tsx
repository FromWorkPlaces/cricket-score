import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Home from './src/screens/Home/Home';
// import RTMPVIEW from './src/screens/VideoPlayerDemo/RTMPVIEW';
// import VideoPlayerDemo from './src/screens/VideoPlayerDemo/VideoPlayerDemo';
// import VideoPlayerDemo2 from './src/screens/VideoPlayerDemo/VideoPlayerDemo2';
import VideoPlayerWebView from './src/screens/VideoPlayerDemo/VideoPlayerWebView';

export default function App() {

  const [play, setPlay] = useState(false)
  
  return (
    <View className="" style={{flex: 1}}>

      {/* <Home/> */}
      {/* <VideoPlayerDemo/> */}
      {/* <VideoPlayerDemo2/> */}
      {/* <RTMPVIEW /> */}
      
      {!play && <View className='mt-5 flex-row justify-center items-center h-full'>
            <TouchableOpacity onPress={() => setPlay(true)} className='w-[100px] bg-blue-400 justify-center px-5 py-2 rounded-lg'>
                <Text className='text-center w-full text-2xl text-white'>Play</Text>
            </TouchableOpacity>
      </View>}
      {play && <VideoPlayerWebView/>}
      
      <StatusBar style="auto" />
    </View>
  );
}
