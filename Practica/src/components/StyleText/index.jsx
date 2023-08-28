import {Text, StyleSheet} from 'react-native'

export const StyleText = ({text, bold, fontSize}) => {
    const customStyles = {
        bold: bold && styles.bold
    }
    
    
    return (
        <Text style = {styles.bold}>{text}</Text>   
    )
}

const styles = StyleSheet.create({
    bold:{
        fontWeight: 'bold'
    }
})