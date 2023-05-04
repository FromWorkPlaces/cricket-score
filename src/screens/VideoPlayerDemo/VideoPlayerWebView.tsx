import { ScrollView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoPlayerWebView = () => {
    return (
        <WebView className='mt-10' source={{ uri: 'http://192.168.0.108:3000' }} style={{ flex: 1 }} />
    );
}
 
export default VideoPlayerWebView;