import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from "expo-constants";
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';

  


export const LayoutMemo = () => {
    // useCallBack to memorize a function 
    // memo to memorize a component 
    //Memorize a value
    const [counter, setCounter] = useState(0)
    const [newCounter, setNewCounter] = useState(0)

    const multiplyCounter = useMemo(() => { //This is a value, not a function
        console.log("memo")
        return counter * 2
    }, [counter])

    // const multiplyCounter = () => {
       //is a function 
    // }

    const sayHello = () => {
        console.log("Say Hello!")
    } 



    return (
        <View style={styles.container}>
            
            <TouchableOpacity 
                // onPress={() => multiplyCounter()}
                style={{borderWidth: 0, padding: 10, margin: 5, borderRadius: 10}}>
                <Text style={{fontSize: 25, fontWeight:'bold'}}>
                    Multiply Counter: {multiplyCounter}
                </Text>
                <Text>SayHello: {sayHello()}</Text>
            </TouchableOpacity>

            {/* <Text style={{fontSize: 30, fontWeight:'bold'}}>{counter}</Text> */}

            <TouchableOpacity
                onPress={() => setCounter(counter+1)}
                style={{borderWidth: 1, padding: 10, margin: 5, borderRadius: 10}}>
                <Text>Increment by one</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setNewCounter(newCounter+1)}
                style={{borderWidth: 1, padding: 10, margin: 5, borderRadius: 10}}>
                <Text>Increment new counter</Text>
            </TouchableOpacity>

        <StatusBar style="auto" />
    </View>
    


    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: Constants.statusBarHeight,
    },
    
});