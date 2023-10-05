import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import RouterU2T9 from './src/Routes/RouterU2T9';

export default function App() {
  return (
    <View style={styles.container}>
      <RouterU2T9 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 10,
  },
});
