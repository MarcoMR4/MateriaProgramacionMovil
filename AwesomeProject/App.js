import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import RouterU2T9 from './src/Routes/RouterU2T9';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalProvider } from './src/Context/ThemeContext';

export default function App() {

  return (
    <GlobalProvider>
      <NavigationContainer>
        <View style={[styles.container]}>
          <RouterU2T9 />
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});
