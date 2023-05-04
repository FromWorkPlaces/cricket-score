import React, { useRef } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { Video, ResizeMode } from "expo-av";

const VideoPlayerDemo = () => {
    const video = React.useRef<any>(null);
    const [status, setStatus] = React.useState<any>({});

    const styles = StyleSheet.create({
        video: {
            height: 200,
            width: '100%',
            backgroundColor: 'gray',
        }
    })

    return (
        <ScrollView className="bg-gray-50 mt-5" style={{ flex: 1 }}>
            <Text className="text-center my-10">Vide Player Demo</Text>

            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <View>
                <Button
                    title={status.isPlaying ? "Pause" : "Play"}
                    onPress={() =>
                        status.isPlaying
                        ? video?.current?.pauseAsync()
                        : video?.current?.playAsync()
                    }
                />
            </View>
        </ScrollView>
    );
};

export default VideoPlayerDemo;

// http://localhost:5000/video/diablo
// https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4 
