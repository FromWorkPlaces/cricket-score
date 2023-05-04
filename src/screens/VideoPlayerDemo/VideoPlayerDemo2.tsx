import React, { useRef } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Video from 'react-native-video';

const VideoPlayerDemo2 = () => {
    const video = React.useRef<any>(null);
    const [status, setStatus] = React.useState<any>({});

    var styles = StyleSheet.create({
        backgroundVideo: {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
    });

    return (
        <ScrollView className="bg-gray-50 mt-5" style={{ flex: 1 }}>
            <Text className="text-center my-10">Vide Player Demo</Text>

            <Video source={{uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}} style={styles.backgroundVideo} />
        </ScrollView>
    );
};

export default VideoPlayerDemo2;

// http://localhost:5000/video/diablo
// https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
