import { useEffect, useState } from "react"
import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { FlatList } from "react-native"
import ApiCardRM from "../components/ApiCardRM"



// unidad2/Practica 4

const CharacterSCreen = ({navigation}) => {
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    const [characters, setCharacters] = useState([])

    const getApiData =  async () => {
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setCharacters(data.results)
            console.log(data)
            console.log(data.results[0].name)

        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Holaaaaa');
            getApiData()
          }, 2000);
        console.log('Holaaaaa')
        

        return () => {
            clearInterval(interval) 
        }
    }, []/*[input, input2]*/)

    return (
        <View style={styles.container}>
            
            <FlatList 
                data = {characters}
                renderItem={({ item }) => (
                    <ApiCardRM
                    name = {item.name}
                    status = {item.status}
                    location = {item.location.name}
                    gender = {item.gender}
                    image = {item.image}
                    species = {item.species}
                    first = {item.origin.name}
                    navigation={navigation}
                    type = {item.type}
                    episode = {item.episode}
                    created = {item.created}
                />
                )}
                ListHeaderComponent={
                    <Text style={{fontSize:50, color: 'silver'}}>Characters</Text>
                }
                ListFooterComponent={
                    <View style={{alignItems:"center", padding: 5}}>
                    <Text style={{fontSize:25, color: 'silver'}}>Pagination</Text>
                    <Button title='Page 1' />
                    <Button title='Page 2' />
                    </View>
                }
                ListEmptyComponent={
                    <View>
                     <Text style={{fontSize:25, color: 'silver'}}>Empty list</Text>
                    </View>
                }
            />
            {/*
            <TextInput 
                value={input}
                onChangeText={(value) => setInput(value)}
                style={{borderWidth:1, }}
            />
            <Text>Input1: {input}</Text>
            <TextInput 
                value={input2}
                onChangeText={(value) => setInput2(value)}
                style={{borderWidth:1, }}
            />
            <Text>Input2: {input2}</Text> 
            */}
            
        </View>
    )
}
export default CharacterSCreen

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#272b33', 
        paddingHorizontal: 20, 
        paddingTop: 10,

    }, 

})

