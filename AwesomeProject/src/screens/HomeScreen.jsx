import React,  {useState, useEffect} from "react";
import { Text, View,  StyleSheet, Switch, ActivityIndicator, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";



const HomeScreen = ({navigation}) => {
    //const [modalVisible, setModalVisible] = useState(false);
    const navigation1 = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [characters, setCharacters] = useState([])
    const [filterCharacters, setFilterCharacters] = useState([])

    const fetchData = async () => {
        try{
            setIsFetching(true)
            const resp = await fetch ('https://rickandmortyapi.com/api/character')
            const data = await resp.json()
            setCharacters(data.results)
            setFilterCharacters(data.results)
        }catch (error) {
        console.log(error)
        }finally{
            setIsFetching(false)
        }
    }

    const filterData = (value) => {
        if (value){
            const filteredData = characters.filter(character => character.name.includes(value))
            setFilterCharacters(filteredData)
        } else{
            setFilterCharacters(characters)
        }
    }
    

    useEffect(() => {
        navigation1.setOptions({
            // title: 'HOME FROM COMPONENT', 
            // headerRight: () => <Text>Right1</Text>,
            // headerLargeTitle: true,
            headerSearchBarOptions: {
                placeholder: 'search items',
            }, 
        })
        fetchData();
    },[])

   

    return (
        <View style={styles.container}>
            <TextInput 
                value={inputValue}
                onChangeText={(e) => setInputValue(e)}
                style={{borderWidth: 1, paddingVertical: 10, paddingHorizontal: 20}}
            />
            <Text>{inputValue}</Text>
            {
                filterCharacters.map((character) => {
                    return (
                        <View key={character.id}>
                            <Text>{character.name}</Text>
                        </View>

                    )
                    })
            }
        </View>
    )
}
export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
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