import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Camara from './src/Components/Camara';
import Home from './src/Screens/Home';
import { useState } from 'react';
import VideoCamara from './src/Components/Video';
import { ImageFiles } from './src/Screens/ImageFiles';
import { CameraContextProvider } from './src/Context/CamaraContext';

export default function App() {
  const [camera, setCamera] = useState(false);
  const [video, setVideo] = useState(false);

  const handleCamera = () => {
    setCamera((prev) => !prev);
    setVideo(false);
  };

  const handleVideo = () => {
    setVideo((prev) => !prev);
    setCamera(false);
  };

  return (
    
    <CameraContextProvider>
      <View style={styles.container}>
        <StatusBar style='auto' />
        {/* <Camara /> */}
        <Home setCamera={handleCamera} setVideo={handleVideo} />
        {camera && <Camara />}
        {video && <VideoCamara />}

        <ImageFiles />
      </View>

    </CameraContextProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});