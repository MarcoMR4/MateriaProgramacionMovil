import React,  {useState, useEffect} from "react";
import { Text, View,  StyleSheet, Switch, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation1 = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    
    const toggleSwitch = ()  => setIsEnabled(
        previousState => !previousState
    )

    useEffect(() => {
        const fetchData = async () => {
            try{
                const resp = await fetch ('https://rickandmortyapi.com/api')
                const data = await resp.json()
                await delay(5000)
    
            }catch (error) {
            console.log(error)
            }finally{
                setIsFetching(false)
            }
        }
    })
  



    return (
        <View style={styles.container}>
        <Switch
            trackColor={{false: 'blue', true: 'red'}}
            thumbColor={isEnabled ? 'yellow' : 'green'}
            ios_backgroundColor="silver"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{transform: [{scaleX: 5}, {scaleY: 5}], marginBottom:50}}
        />

        <Text style={{transform: [{scaleX: 2}, {scaleY: 2}], marginBottom:50}}>This is a text</Text>

        <ActivityIndicator size="large" color="black" />
        </View>
    )
}
export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  
  {/*
 <View>
            <Text>Home screen</Text>
             <Button title='Go to the login page' 
                onPress={() => navigation.navigate('Login', {name: 'Usuario1'})}
             />
              <Button 
                title='Go back'
                disabled={!navigation1.canGoBack()}
                onPress={() => navigation1.goBack()}
            />
        </View>
 */}

 
 {/*

 <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style= {{fontSize: 30, marginBottom: 550,}}>Hello World!</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      
    </View>

*/}