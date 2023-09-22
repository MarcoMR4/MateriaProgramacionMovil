import { useEffect, useState } from "react"
import React from "react"
import { TextInput } from "react-native"
import { View, Text } from "react-native"
import { FlatList } from "react-native"

// unidad2/Practica 4

const CharacterSCreen = () => {
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
        
        

        /*console.log('Valor input1: '+input)
        console.log('Valor input2: '+input2) 
        setInterval(() => {
            console.log()
        }, 0)
        */

        return () => {
            clearInterval(interval) 
        }
    }, []/*[input, input2]*/)

    return (
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
            <Text style={{fontSize:50}}>Characters</Text>
            <FlatList 
                data = {characters}
                renderItem={({ item }) => (
                    <View style={{borderTopWidth: 1}}>
                        <Text>Id: {item.id}</Text>
                        <Text>Name: {item.name}</Text>
                        <Text>Status: {item.status}</Text>
                        <Text>Gender: {item.gender}</Text>
                    </View>
                )}
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

