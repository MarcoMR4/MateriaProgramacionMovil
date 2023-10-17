import { RouterT10 } from "../Routes/RouterT10";
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";


export const Layout = () => {
    return(
        <NavigationContainer>
        <View style={styles.container}>
             <RouterT10 />
        </View>
     </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Constants.statusBarHeight,
    },
  });