const { withVideo } = require('react-native-video/tools');


module.exports = {
    assets: [withVideo()],
    dependencies: {
      'react-native-video': {
        platforms: {
          ios: null, // disable iOS platform, other platforms will still autolink
        },
      },
    },
  };
  