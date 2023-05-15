import { ScrollView, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const VideoPlayerWebView = () => {
    return (
        <WebView className='mt-10' source={{ uri: 'https://cricket-web.vercel.app/' }} style={{ flex: 1 }} />
    );
}
 
export default VideoPlayerWebView;