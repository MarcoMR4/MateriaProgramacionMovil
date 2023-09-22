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
            const responde = await fetch('https://rickandmortyapi.com/api/character')
            const data = await responde.json()
            setCharacters = data.results
            console.log(data)
            console.log(data.results[0].name)

        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        console.log('Holaaaaa')
        getApiData()

        /*console.log('Valor input1: '+input)
        console.log('Valor input2: '+input2) 
        setInterval(() => {
            console.log()
        }, 0)
        */

        return () => {
            clearInterval() 
        }
    }, /*[input, input2]*/)

    return (
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
            <Text style={{fontSize:50}}>Characters</Text>
            <FlatList 
                data = {characters}
                renderItem={({ item }) => {
                    <Text>{item.name}</Text>
                }}
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

