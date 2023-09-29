import React,  {useState, useEffect} from "react";
import { Text, View,  StyleSheet, Switch, ActivityIndicator, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ApiCardRM from "../components/ApiCardRM";




const HomeScreen = ({navigation}) => {
    const api = 'https://apisimpsons.fly.dev/api/personajes?limit=30'
    //const [modalVisible, setModalVisible] = useState(false);
    const navigation1 = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const [characters, setCharacters] = useState([])
    
    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
      fetchData(); // Llama a fetchData cuando el interruptor cambie.
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const fetchData = async () => {
      try{
          setIsFetching(true)
          const resp = await fetch(api)
          //console.log('recibiendo '+resp.text())
          const data = await resp.json()
          console.log('data json '+data.docs)
          setCharacters(data.docs)
          await delay(5000);
      }catch (error) {
      console.log(error)
      }finally{
          setIsFetching(false)
      }
  }

    useEffect(() => {
        fetchData();
    },[])

    

    return (
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}> 
                <Text style={{fontSize: 20, color: 'white', marginTop: 5}}>Reload</Text>
                <Switch
                    trackColor={{false: 'blue', true: 'red'}}
                    thumbColor={isEnabled ? 'yellow' : 'green'}
                    ios_backgroundColor="silver"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{transform: [{scaleX: 1}, {scaleY: 1}], marginBottom:50}}
                />
            </View>
       

        { isFetching ? 
          (
            <View style={{flexDirection:"row"}}> 
                <ActivityIndicator size="large" color="white" />
                <Text style={{fontSize: 15, color: 'white', marginTop: 5}}>Loading...</Text>
            </View>
          
          )  
        :
          (
            <FlatList 
                data = {characters}
                renderItem={({ item }) => (
                    <ApiCardRM
                    name = {item.Nombre}
                    status = {item.Estado}
                    image = {item.Imagen}
                    ocupacion = {item.Ocupacion}
                    historia = {item.Historia}

                />
                )}
                ListHeaderComponent={
                    <Text style={{fontSize:50, color: 'silver'}}>Characters</Text>
                }
                ListFooterComponent={
                    <View style={{alignItems:"center", padding: 5}}>
                    <Text style={{fontSize:25, color: 'silver'}}>Pagination</Text>
                    </View>
                }
                ListEmptyComponent={
                    <View>
                    <Text style={{fontSize:25, color: 'silver'}}>Empty list</Text>
                    </View>
                }
            />
          ) 
        }
        
        </View>
    )
}
export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10, 
        paddingTop: 5,
        backgroundColor: '#272b33', 
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